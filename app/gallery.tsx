import Image from 'next/image';
import {ArrowUpRight, Code2, Plus} from 'lucide-react';
import {projects} from './projects';

export default function Gallery() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <article className="project-card" id={project.id} key={project.id}>
          <a
            className={`project-poster poster-${project.id}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} in a new tab`}
          >
            {project.image ? (
              <Image src={project.image} alt={project.caption} width={800} height={500}
                sizes="(max-width: 640px) 90vw, (max-width: 1000px) 44vw, 30vw"
                priority={index === 0} />
            ) : (
              <svg viewBox="0 0 800 500" role="img" aria-label="Illustration of three-body orbit paths">
                <path d="M180 250C180 70 620 70 620 250S180 430 180 250C180 90 620 410 620 250S180 90 180 250"
                  fill="none" stroke="#d7fc70" strokeWidth="2" />
                <circle cx="180" cy="250" r="9" fill="#d7fc70" />
                <circle cx="513" cy="162" r="8" fill="#8cd3ee" />
                <circle cx="520" cy="340" r="8" fill="#eaa6b9" />
              </svg>
            )}
            <span className="poster-action">Open app <ArrowUpRight size={16} aria-hidden="true" /></span>
          </a>
          <div className="card-copy">
            <p className="eyebrow">{String(index + 1).padStart(2, '0')} / {project.category}</p>
            <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}<span className="sr-only"> (opens in a new tab)</span></a></h3>
            <p className="project-lede">{project.line}</p>
            <p className="project-description">{project.description}</p>
            <p className="built-with">Built with</p>
            <ul className="tags" aria-label={`${project.name} technologies`}>
              {project.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="card-links">
              <a href={project.url} target="_blank" rel="noopener noreferrer">Open app <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
              {project.id === 'denver' && <a href={`${project.url}?view=map`} target="_blank" rel="noopener noreferrer">Lightweight map<span className="sr-only"> (opens in a new tab)</span></a>}
              <a className="source-link" href={`https://github.com/mattvildibill/${project.repo}`} target="_blank" rel="noopener noreferrer"><Code2 size={16} aria-hidden="true" />View code<span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
          <details className="project-details">
            <summary>More about this project <Plus size={17} aria-hidden="true" /></summary>
            <div className="detail-content">
              <h4>How it works</h4>
              <ul>{project.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>
              <h4>Try this</h4>
              <p>{project.tryThis}</p>
              <h4>A few things to know</h4>
              <p>{project.boundary}</p>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
