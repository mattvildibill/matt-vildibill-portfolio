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
            <a className="project-entry" href={launch}
              target="_blank" rel="noopener noreferrer"
              aria-label={`${project.action}: ${project.name} (opens in a new tab)`}>
              <div className={`project-poster poster-${project.id}`}>
                <Image src={project.image} alt={project.caption} width={1280} height={800}
                  sizes="(max-width: 640px) 90vw, (max-width: 1000px) 44vw, 30vw"
                  preload={index === 0} />
              </div>
              <div className="card-copy">
                <p className="eyebrow">{String(index + 1).padStart(2, '0')} / {project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-stack">{project.tags.join(' · ')}</p>
                <p className="project-description">{project.description}</p>
                <span className="project-action">{project.action}<ArrowUpRight size={16} aria-hidden="true" /></span>
              </div>
            </a>
            <div className="card-links">
              {project.secondary && <a href={`${project.url}${project.secondary.path}`} target="_blank" rel="noopener noreferrer">{project.secondary.label}<span className="sr-only"> for {project.name} (opens in a new tab)</span></a>}
              <a className="source-link" href={`https://github.com/mattvildibill/${project.repo}`} target="_blank" rel="noopener noreferrer"><Code2 size={16} aria-hidden="true" />View code<span className="sr-only"> for {project.name} (opens in a new tab)</span></a>
            </div>
            <details className="project-details">
              <summary>Build notes<span className="sr-only"> for {project.name}</span><Plus size={17} aria-hidden="true" /></summary>
              <div className="detail-content">
                <p>{project.decision}</p>
                <p className="project-boundary"><span>Limits</span>{project.boundary}</p>
              </div>
            </details>
          </article>
        );
      })}
    </div>
  );
}
