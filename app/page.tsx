import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
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
        <a className="identity" href="#top">
          <span className="monogram" aria-hidden="true">mv</span>
          <span>Matt Vildibill<span className="identity-role">Software engineer</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Projects</a><a href="#contact">Contact</a>
          <span className="desktop-link"><External href={github}>GitHub</External></span>
        </nav>
      </header>
      <main>
        <section className="portfolio-intro" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow">HI, I’M MATT</p>
            <h1 id="intro-title">I like building things <span>and figuring them out.</span></h1>
          </div>
          <div className="intro-copy">
            <p>I’m a software engineer with a background in integration and test automation. These are a few projects I’ve built around art, cities, racing, and simulation.</p>
            <div className="intro-links">
              <a href={email}><Mail size={16} aria-hidden="true" />Email me</a>
              <External href={linkedin}>LinkedIn</External>
            </div>
          </div>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">A few of my projects <span>06</span></h2>
            <p>Pick something to explore.</p>
          </div>
          <Gallery />
        </section>
        <section className="about" id="contact" aria-labelledby="contact-title">
          <span id="about" className="legacy-anchor" aria-hidden="true" />
          <div>
            <p className="eyebrow">LET’S TALK</p>
            <h2 id="contact-title">Looking for my next<br />software engineering role.</h2>
          </div>
          <div className="about-copy">
            <p>I like projects that give me something to investigate: how a small change affects an orbit, where a message gets delayed, or how to turn a painting into a place.</p>
            <p>If you’d like to talk about the work or a role, you can reach me here.</p>
            <div className="contact-links">
              <a href={email}>mattvildibill4@gmail.com<Mail size={16} aria-hidden="true" /></a>
              <External href={linkedin}>LinkedIn</External>
              <External href={github}>GitHub</External>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>Matt Vildibill<span className="footer-role">Software engineer</span></span>
        <div>
          <a href={email}>Email</a>
          <External href={linkedin}>LinkedIn</External>
          <External href={`${github}/matt-vildibill-portfolio`}>Portfolio source</External>
          <a href="#top">Back to top<ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
