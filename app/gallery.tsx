import Image from 'next/image';
import { ArrowUpRight, Code2, Plus } from 'lucide-react';
import { projects } from './projects';

export default function Gallery() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => {
        const launch = `${project.url}${project.launchPath}`;
        return (
          <article className="project-card" id={project.id} key={project.id}>
            <a className={`project-poster poster-${project.id}`} href={launch}
              target="_blank" rel="noopener noreferrer"
              aria-label={`${project.action}: ${project.name} (opens in a new tab)`}>
              <Image src={project.image} alt={project.caption} width={1280} height={800}
                sizes="(max-width: 640px) 90vw, (max-width: 1000px) 44vw, 30vw"
                preload={index === 0} />
              <span className="poster-action">{project.action}<ArrowUpRight size={16} aria-hidden="true" /></span>
            </a>
            <div className="card-copy">
              <p className="eyebrow">{String(index + 1).padStart(2, '0')} / {project.category}</p>
              <h3><a href={launch} target="_blank" rel="noopener noreferrer">{project.name}<span className="sr-only"> (opens in a new tab)</span></a></h3>
              <p className="project-lede">{project.line}</p>
              <p className="project-description">{project.description}</p>
              <p className="try-this">{project.tryThis}</p>
              <div className="card-links">
                <a href={launch} target="_blank" rel="noopener noreferrer">{project.action}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                {project.secondary && <a href={`${project.url}${project.secondary.path}`} target="_blank" rel="noopener noreferrer">{project.secondary.label}<span className="sr-only"> (opens in a new tab)</span></a>}
                <a className="source-link" href={`https://github.com/mattvildibill/${project.repo}`} target="_blank" rel="noopener noreferrer"><Code2 size={16} aria-hidden="true" />View code<span className="sr-only"> (opens in a new tab)</span></a>
              </div>
            </div>
            <details className="project-details">
              <summary>How it works<Plus size={17} aria-hidden="true" /></summary>
              <div className="detail-content">
                <ul>{project.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
                <h4>A design choice</h4>
                <p>{project.decision}</p>
                <h4>Built with</h4>
                <ul className="tags" aria-label={`${project.name} technologies`}>
                  {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
                <h4>A few things to know</h4>
                <p>{project.boundary}</p>
              </div>
            </details>
          </article>
        );
      })}
    </div>
  );
}
