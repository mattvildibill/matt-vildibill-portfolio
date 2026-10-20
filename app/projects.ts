export type Project = {
  id: string;
  name: string;
  repo: string;
  url: string;
  category: string;
  description: string;
  action: string;
  launchPath: string;
  secondary?: { label: string; path: string };
  tags: string[];
  decision: string;
  boundary: string;
  image: string;
  caption: string;
};

export const projects: Project[] = [
  {
    "id": "fabric",
    "url": "https://fabric.mattvildibill.com",
    "name": "Fabric Reality Lab",
    "repo": "fabric-reality-lab",
    "category": "NETWORK SIMULATION",
    "description": "A lab for finding what holds up a distributed job. Run the same workload with and without a network fault, then follow the messages and queues to see where the time goes.",
    "tags": [
      "TypeScript",
      "Next.js",
      "Three.js"
    ],
    "boundary": "An exploratory model, not measured hardware telemetry or a way to rank vendors.",
    "image": "/images/fabric-preview.jpg",
    "caption": "The seeded packet experiment in Fabric Reality Lab",
    "action": "Explore the lab",
    "launchPath": "/",
    "decision": "Paired runs use the same seed and workload. That keeps the comparison focused on the network change."
  },
  {
    "id": "gravity",
    "url": "https://gravity.mattvildibill.com",
    "name": "Gravity, Unscripted",
    "repo": "gravity-unscripted",
    "category": "GRAVITY SIMULATION",
    "description": "I’ve always been curious about the n-body problem. I built this to change the starting conditions, compare the motion, and see how much I could trust the calculation.",
    "tags": [
      "JavaScript",
      "Web Workers",
      "Three.js"
    ],
    "boundary": "Newtonian point masses, without force softening. Agreement between runs is a consistency check, not proof of an exact orbit.",
    "caption": "Figure-eight orbit in the Gravity, Unscripted browser laboratory",
    "action": "Try a small change",
    "launchPath": "/#chaos",
    "decision": "Custom experiments run in a Web Worker and repeat at a tighter tolerance, so I can compare the answers while keeping the controls responsive.",
    "image": "/images/gravity-preview.jpg"
  },
  {
    "id": "f1",
    "url": "https://f1.mattvildibill.com",
    "name": "F1 Live Tracker",
    "repo": "F1-live-tracker",
    "category": "F1 DATA DASHBOARD",
    "description": "I started this during an F1 race because I wanted more data than the broadcast was showing. It puts timing, telemetry and recorded race replays in one place, with a synthetic demo you can try offline.",
    "tags": [
      "TypeScript",
      "React",
      "REST APIs"
    ],
    "boundary": "OpenF1 requires authentication during live sessions, so live timing may be unavailable. Recorded replays use lap-end positions rather than GPS tracks. The demo uses synthetic race data.",
    "image": "/images/f1-preview.jpg",
    "caption": "Paused synthetic Australian GP demonstration in F1 Live Tracker",
    "action": "Try the demo",
    "launchPath": "/?mode=demo&panel=tower&time=120",
    "secondary": {
      "label": "Race weekend",
      "path": "/"
    },
    "decision": "Live data, recorded lap replays and the synthetic demo stay separate. Replay only reveals laps up to the selected point; missing provider values stay unknown."
  },
  {
    "id": "denver",
    "url": "https://denver.mattvildibill.com",
    "name": "Denver Explorer",
    "repo": "denver-spire-explorer",
    "category": "3D CITY EXPLORER",
    "description": "A downtown Denver explorer built from public building data, streets and aerial imagery. Walk at street level, fly above the city, or follow a six-stop tour.",
    "tags": [
      "Three.js",
      "Python",
      "GIS"
    ],
    "boundary": "Older public data, estimated facades and flat ground. This is a reconstruction, so it won’t reflect every detail or recent change.",
    "image": "/images/denver-preview.jpg",
    "caption": "Downtown Denver in the browser explorer’s 3D view",
    "action": "Explore Denver",
    "launchPath": "/",
    "secondary": {
      "label": "2D overview",
      "path": "/?view=map"
    },
    "decision": "Walking uses mapped building footprints, including courtyards and suspended structures. A separate 2D map skips the 3D renderer entirely."
  },
  {
    "id": "fort-collins",
    "url": "https://fort-collins.mattvildibill.com",
    "name": "Fort Collins Worlds",
    "repo": "fort-collins-worlds",
    "category": "3D CITY EXPLORER",
    "description": "I love Fort Collins, so I rebuilt its downtown and added a way to try a few changes. Add trees, change the streets or season, and compare your version with the original.",
    "tags": [
      "JavaScript",
      "Three.js",
      "LiDAR"
    ],
    "boundary": "Visual experiments, not planning forecasts. Terrain and roofs are estimates from older LiDAR; the text controls support a fixed vocabulary.",
    "image": "/images/fort-collins-preview.jpg",
    "caption": "Downtown Fort Collins in the browser reconstruction",
    "action": "Try Green streets",
    "launchPath": "/?preset=green",
    "decision": "A local rule-based interpreter keeps supported changes predictable and usable without a service. The historic core retains its building heights and materials."
  },
  {
    "id": "painted",
    "url": "https://painted.mattvildibill.com",
    "name": "Painted Worlds",
    "repo": "painted-worlds",
    "category": "3D ART EXPLORER",
    "description": "I wanted a digital home for my mom’s paintings. Browse the originals, or step into nine of them as 3D places you can walk around.",
    "tags": [
      "JavaScript",
      "Three.js",
      "WebGL"
    ],
    "boundary": "Depth and areas outside the painted viewpoint are imagined. These are interpretations rather than scans of real places.",
    "image": "/images/painted-preview.jpg",
    "caption": "Original paintings in the searchable Painted Worlds collection",
    "action": "Browse paintings",
    "launchPath": "/?view=collection",
    "secondary": {
      "label": "Explore in 3D",
      "path": "/#lily-lake"
    },
    "decision": "Originals load independently of the 3D scenes. A painting stays available even if its world is slow to load or the device can’t run it."
  }
];
