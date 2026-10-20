import { ArrowUpRight, Mail } from 'lucide-react';
import type { ReactNode } from 'react';
import Gallery from './gallery';

const github = 'https://github.com/mattvildibill';
const linkedin = 'https://www.linkedin.com/in/mattvildibill/';
const email = 'mailto:mattvildibill4@gmail.com';

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}<ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a href="#work" className="skip-link">Skip to projects</a>
      <header className="site-header" id="top">
        <span id="contact" className="legacy-anchor" aria-hidden="true" />
        <span id="about" className="legacy-anchor" aria-hidden="true" />
        <div className="identity">
          <span className="monogram" aria-hidden="true">mv</span>
          <span>Matt Vildibill<span className="identity-role">Software engineer</span></span>
        </div>
        <nav className="contact-links" aria-label="Contact and profiles">
          <a href={email} aria-label="Email Matt Vildibill"><Mail size={16} aria-hidden="true" />Email</a>
          <External href={linkedin}>LinkedIn</External>
          <External href={github}>GitHub</External>
        </nav>
      </header>
      <main>
        <section className="portfolio-intro" aria-labelledby="intro-title">
          <div>
            <h1 id="intro-title">I like building things <span>and figuring them out.</span></h1>
          </div>
          <div className="intro-copy">
            <p>My background is in integration and test automation. I like taking a problem apart, trying a few approaches, and seeing what actually works.</p>
            <p>These projects usually start with something I want to understand or a tool I wish I had.</p>
          </div>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Projects</h2>
          </div>
          <Gallery />
        </section>
      </main>
      <footer>
        <p>Open to software engineering roles.</p>
        <External href={`${github}/matt-vildibill-portfolio`}>Portfolio source</External>
      </footer>
    </>
  );
}
