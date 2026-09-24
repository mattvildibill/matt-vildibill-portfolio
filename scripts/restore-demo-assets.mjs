import {readFileSync,writeFileSync,existsSync,mkdirSync,statSync,renameSync} from 'node:fs';
import {resolve,dirname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
const root=fileURLToPath(new URL('../',import.meta.url));
const bundle=resolve(root,'demo-assets');
const manifestBytes=readFileSync(resolve(bundle,'manifest.json'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const digest=hash(manifestBytes), manifest=JSON.parse(manifestBytes);
const cachePath=resolve(root,'.asset-restore-cache.json');
const safePath=p=>{const absolute=resolve(root,p);if(!p.startsWith('public/demos/')||!absolute.startsWith(resolve(root,'public/demos')+sep))throw Error('Invalid asset path: '+p);return absolute};
let cached=false;
try {const cache=JSON.parse(readFileSync(cachePath,'utf8'));cached=cache.digest===digest&&cache.files.length===manifest.files&&cache.files.every(f=>statSync(safePath(f.path)).size===f.size)} catch {}
if(!cached){
 if(manifest.format!=='portfolio-assets-v1')throw Error('Unsupported asset bundle');
 const chunks=manifest.parts.map(p=>{if(!/^world-assets\.\d+\.gzpart$/.test(p.name))throw Error('Invalid part name');const bytes=readFileSync(resolve(bundle,p.name));if(bytes.length!==p.size||hash(bytes)!==p.sha256)throw Error('Asset part checksum failed: '+p.name);return bytes});
 const data=gunzipSync(Buffer.concat(chunks)), files=[];let offset=0;
 while(offset<data.length){
  if(offset+4>data.length)throw Error('Truncated asset header');
  const length=data.readUInt32BE(offset);offset+=4;
  if(length>8192||offset+length>data.length)throw Error('Invalid asset header');
  const entry=JSON.parse(data.subarray(offset,offset+length));offset+=length;
  if(!Number.isSafeInteger(entry.size)||entry.size<0||offset+entry.size>data.length)throw Error('Invalid asset size');
  const bytes=data.subarray(offset,offset+entry.size);offset+=entry.size;
  if(hash(bytes)!==entry.sha256)throw Error('Asset checksum failed: '+entry.path);
  const dest=safePath(entry.path);
  if(existsSync(dest)){if(hash(readFileSync(dest))!==entry.sha256)throw Error('Existing asset differs; preserve or remove it before restoring: '+entry.path)}
  else {mkdirSync(dirname(dest),{recursive:true});writeFileSync(dest+'.restore-tmp',bytes);renameSync(dest+'.restore-tmp',dest)}
  files.push({path:entry.path,size:entry.size});
 }
 if(files.length!==manifest.files)throw Error('Asset count mismatch');
 writeFileSync(cachePath,JSON.stringify({digest,files}));console.log(`Restored ${files.length} verified demo assets from local bundles.`);
}
