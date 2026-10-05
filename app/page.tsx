import {ArrowUpRight, ArrowUp} from 'lucide-react';
import Gallery from './gallery';

const github = 'https://github.com/mattvildibill';

function External({href, children, className = ''}: {href: string; children: React.ReactNode; className?: string}) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}

export default function Home() {
  return <>
    <a href="#work" className="skip-link">Skip to projects</a>
    <header className="site-header" id="top">
      <a className="identity" href="#top"><span className="monogram" aria-hidden="true">mv</span><span>Matt Vildibill<span className="identity-role">Software engineer</span></span></a>
      <nav aria-label="Main navigation"><a href="#work">Projects</a><a href="#about">About</a><External href={github}>GitHub</External></nav>
    </header>
    <main>
      <section className="portfolio-intro" aria-labelledby="intro-title">
        <div><p className="eyebrow">SIMULATION / DATA / EXPLORABLE WORLDS</p><h1 id="intro-title">Software you can <span>step inside.</span></h1></div>
        <p>Personal projects in simulation, geospatial graphics, and data interfaces. Open an app to explore, or look inside the implementation.</p>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Selected projects <span>06</span></h2><p>Each app opens in its own tab.</p></div>
        <Gallery />
      </section>
      <section className="about" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">ABOUT THE WORK</p><h2 id="about-title">Make complex systems<br />easier to understand.</h2></div>
        <div className="about-copy">
          <p>My professional background is in software engineering, integration, and test automation. These self-directed, AI-assisted projects explore another side of that work: making system behavior visible and interactive.</p>
          <p>Each project pairs an explorable interface with inspectable source and clear limits on what its models and data can tell you.</p>
          <External href={github}>More on GitHub</External>
        </div>
      </section>
    </main>
    <footer><span>Matt Vildibill<span className="footer-role">Software engineering · Interactive systems</span></span><div><External href={`${github}/matt-vildibill-portfolio`}>Portfolio source</External><a href="#top">Back to top <ArrowUp size={15} aria-hidden="true" /></a></div></footer>
  </>;
}
