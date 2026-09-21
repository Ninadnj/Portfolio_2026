import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  FileDown,
  Github,
  Layers3,
  Mail,
  MapPin,
} from "lucide-react";
import { Projects } from "@/components/sections/Projects";
import { capabilities, cvUrl, openSourceProjects } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#main-content"
            className="identity"
            aria-label="Nina Doinjashvili, home"
          >
            <span className="monogram" aria-hidden="true">
              nd.
            </span>
            <span>
              Nina Doinjashvili
              <span className="identity-role">Applied AI Engineer</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#work">Work</a>
            <a href="#open-source">Open source</a>
            <a href="#about">About</a>
            <a className="nav-contact" href="#contact">
              Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="container hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Applied AI / Automation /
              Integrations
            </p>
            <h1 id="hero-heading">
              Useful AI.
              <br />
              Built for the
              <br />
              <span>real workflow.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m Nina, an Applied AI Engineer in Paris. I turn business
              processes into AI agents, connected systems, and automation people
              can use.
            </p>
            <p className="hero-detail">
              From client workflows to open-source tooling, my focus is on clear
              boundaries, reliable integrations, and evaluation.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={cvUrl} download>
                Download CV <FileDown size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-location">
              <MapPin size={14} aria-hidden="true" /> Paris, France{" "}
              <span>·</span> French &amp; English C1
            </p>
          </div>
          <div
            className="system-panel"
            aria-label="Illustration of my engineering approach"
          >
            <div className="panel-topline">
              <span className="mono">FROM BRIEF TO WORKFLOW</span>
              <Layers3 size={17} aria-hidden="true" />
            </div>
            <div className="system-input">
              <span className="node-icon">
                <Mail size={20} aria-hidden="true" />
              </span>
              <div>
                <span className="mono">01 / UNDERSTAND</span>
                <h2>A real business need</h2>
                <p>People, process, constraints</p>
              </div>
            </div>
            <div className="system-connector" aria-hidden="true">
              <ArrowDown size={17} />
            </div>
            <div className="system-core">
              <span className="node-icon">
                <Bot size={23} aria-hidden="true" />
              </span>
              <div>
                <span className="mono">02 / CONNECT</span>
                <h2>Knowledge → action</h2>
                <p>LLM agent + business APIs</p>
              </div>
              <div className="core-tags">
                <span>Context</span>
                <span>Typed tools</span>
                <span>Validation</span>
              </div>
            </div>
            <div className="system-connector" aria-hidden="true">
              <ArrowDown size={17} />
            </div>
            <div className="system-outputs">
              <div>
                <Check size={18} aria-hidden="true" />
                <h3>Complete the task</h3>
                <p>Verify the result</p>
              </div>
              <div>
                <ArrowUpRight size={18} aria-hidden="true" />
                <h3>Hand off clearly</h3>
                <p>Keep people in control</p>
              </div>
            </div>
            <p className="panel-note">
              <span className="status-dot" /> Built with checks, context, and a
              way back.
            </p>
          </div>
        </section>

        <div
          className="container proof-strip"
          aria-label="Experience at a glance"
        >
          <div>
            <strong>04</strong>
            <span>Client systems in production</span>
          </div>
          <div>
            <strong>05</strong>
            <span>Open-source AI projects</span>
          </div>
          <div>
            <strong>2024—now</strong>
            <span>Independent applied AI work</span>
          </div>
        </div>

        <section
          id="work"
          className="container section"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Selected client work</p>
              <h2 id="work-heading">
                Real problems.
                <br />
                Working systems.
              </h2>
            </div>
            <p>
              Four production systems for clients in France and Greece. Each
              starts with a business need and connects the tools required to
              address it.
            </p>
          </div>
          <Projects />
        </section>

        <section
          id="open-source"
          className="research-section section"
          aria-labelledby="oss-heading"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Open-source engineering</p>
                <h2 id="oss-heading">
                  Make the behaviour
                  <br />
                  visible. Then test it.
                </h2>
              </div>
              <p>
                Experiments and tools for agent memory, traceability, and
                reliable tool use. Code, evaluation methods, and limitations are
                published together.
              </p>
            </div>
            <div className="research-grid">
              {openSourceProjects.map((project, index) => (
                <article className="research-card" key={project.name}>
                  <div className="card-topline">
                    <span className="mono">
                      0{index + 1} / {project.category}
                    </span>
                    <Github size={19} aria-hidden="true" />
                  </div>
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  </h3>
                  <p>{project.description}</p>
                  <div className="evidence">
                    <span className="small-label">Evidence &amp; scope</span>
                    <p>{project.evidence}</p>
                  </div>
                  <details className="research-details">
                    <summary>
                      What this demonstrates{" "}
                      <ChevronDown size={15} aria-hidden="true" />
                    </summary>
                    <p>{project.limit}</p>
                  </details>
                  <div className="research-footer">
                    <span>{project.stack}</span>
                    {"demo" in project && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Try the demo{" "}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
              <a
                className="github-card"
                href="https://github.com/Ninadnj"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={28} aria-hidden="true" />
                <span>
                  Explore the code,
                  <br />
                  tests, and trade-offs.
                </span>
                <span className="text-link">
                  View GitHub profile{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="container section"
          aria-labelledby="about-heading"
        >
          <div className="about-grid">
            <div>
              <p className="eyebrow">03 / Background &amp; capabilities</p>
              <h2 id="about-heading">
                Business context.
                <br />
                Engineering discipline.
              </h2>
              <p className="about-intro">
                My background combines economics and management with applied AI.
                Since 2024, I&apos;ve worked independently on systems that
                connect private data, APIs, and everyday operations.
              </p>
              <p className="about-intro">
                I care about what happens after a demo: changing information,
                incomplete requests, failed integrations, and the people who
                need to use the result.
              </p>
              <div className="language-line">
                <span className="small-label">Languages</span>
                <p>French C1 · English C1 · Georgian native</p>
              </div>
            </div>
            <div className="capabilities">
              {capabilities.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>{item.skills}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="education">
            <div>
              <p className="eyebrow">Education</p>
              <h3>
                A foundation in AI
                <br />
                and business.
              </h3>
            </div>
            <div className="education-list">
              <article>
                <span className="mono">2026</span>
                <div>
                  <h4>AI &amp; Big Data Developer · RNCP Level 6</h4>
                  <p>Le Wagon, Paris · Certified January 2026 · RNCP38616</p>
                  <p className="education-note">
                    Capstone: pix2pix image colorization with an interactive
                    Streamlit demo.
                  </p>
                </div>
              </article>
              <article>
                <span className="mono">2019–2021</span>
                <div>
                  <h4>Licence · Economics &amp; Management</h4>
                  <p>Université Paris Nanterre</p>
                </div>
              </article>
              <article>
                <span className="mono">2010–2014</span>
                <div>
                  <h4>Bachelor&apos;s · Business &amp; Economics</h4>
                  <p>
                    Tbilisi State University · Recognised by ENIC-NARIC France
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">04 / Get in touch</p>
              <h2 id="contact-heading">
                Have a workflow
                <br />
                worth improving?
              </h2>
              <p>Let&apos;s talk about applied AI, a project, or your team.</p>
            </div>
            <div className="contact-actions">
              <a
                className="contact-email"
                href="mailto:ninodoinjashvili@gmail.com"
              >
                ninodoinjashvili@gmail.com{" "}
                <ArrowUpRight size={24} aria-hidden="true" />
              </a>
              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/nina-doinjashvili-8928815a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Ninadnj"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a href={cvUrl} download>
                  Download CV <FileDown size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <span>© 2026 Nina Doinjashvili</span>
        <span>Applied AI Engineer · Paris</span>
        <a href="#main-content">
          Back to top <ArrowRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
