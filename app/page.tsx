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
        <div><p className="eyebrow">HI, I’M MATT</p><h1 id="intro-title">I like building things <span>and figuring them out.</span></h1></div>
        <p>I’m a software engineer who loves learning by making things. Here are a few projects I’ve been working on, from gravity simulations to places you can wander around. Take a look, try them out, or dig into the code.</p>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">A few of my projects <span>06</span></h2><p>Open a project to try it out.</p></div>
        <Gallery />
      </section>
      <section className="about" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">A BIT ABOUT ME</p><h2 id="about-title">Always something<br />new to learn.</h2></div>
        <div className="about-copy">
          <p>My background is in software engineering, integration, and test automation. These projects are a chance to follow my curiosity and learn by building.</p>
          <p>I use AI tools to help develop these projects. You can explore each app, see what it’s built with, and read the code on GitHub.</p>
          <External href={github}>Find me on GitHub</External>
        </div>
      </section>
    </main>
    <footer><span>Matt Vildibill<span className="footer-role">Software engineer · Curious builder</span></span><div><External href={`${github}/matt-vildibill-portfolio`}>Portfolio source</External><a href="#top">Back to top <ArrowUp size={15} aria-hidden="true" /></a></div></footer>
  </>;
}
