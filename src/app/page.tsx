import { ProjectCard } from "@/components/project-card";
import { processSteps, projects, services, site } from "@/data/site";

const discoveryHref =
  site.bookingUrl ||
  "mailto:seundavid357@gmail.com?subject=Let%27s%20discuss%20a%20project";

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero-section section-shell" id="top">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-mark" />
              FULL-STACK DEVELOPER <span className="eyebrow-divider">/</span> WEB · API · AI
            </p>
            <h1>
              I turn business ideas into{" "}
              <span className="headline-accent">useful digital products.</span>
            </h1>
            <p className="hero-description">
              I design and build websites and web applications, connect the
              systems businesses depend on, and add AI where it creates real
              value.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={discoveryHref}>
                Book a discovery call <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-quiet" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
            </div>
            {!site.bookingUrl && (
              <p className="setup-note">
                Calendar scheduling will be connected before launch. Email is
                available through the booking button for now.
              </p>
            )}
            <div className="hero-proof">
              <span className="proof-line" />
              <span>From the first conversation to the finished product.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile portrait placeholder">
            <div className="visual-orbit orbit-one" aria-hidden="true" />
            <div className="visual-orbit orbit-two" aria-hidden="true" />
            <div className="visual-glow" aria-hidden="true" />
            <div className="floating-chip chip-top">
              <span className="chip-dot" /> Thoughtful by design
            </div>
            <div className="portrait-card">
              <div className="portrait-card-top">
                <span>PERSONAL PROFILE</span><span className="portrait-card-index">01 / 01</span>
              </div>
              <div
                className="portrait-placeholder"
                role="img"
                aria-label="Temporary portrait placeholder for Babatunde Abeeb Seun"
              >
                <div className="portrait-halo" />
                <div className="portrait-initials">BS</div>
                <div className="portrait-placeholder-label">
                  PROFESSIONAL PORTRAIT<span>TO BE ADDED</span>
                </div>
              </div>
              <div className="portrait-card-bottom">
                <div>
                  <strong>Babatunde Abeeb Seun</strong>
                  <span>Full-stack developer</span>
                </div>
                <span className="portrait-arrow" aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="floating-chip chip-bottom">
              <span className="chip-sparkle" aria-hidden="true">✳</span> Built around your goals
            </div>
            <div className="visual-caption">A PLACEHOLDER FOR THE 3D PORTRAIT</div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>WHAT I BUILD</span>
          <div className="hero-capabilities">
            <span>Websites</span><i /><span>Web applications</span><i />
            <span>Backend & APIs</span><i /><span>AI integration</span>
          </div>
        </div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Products built around real problems.</h2>
            </div>
            <p className="section-intro">
              A look at the products I’m building, the problems behind them and
              the engineering that brings them together.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <p className="placeholder-disclaimer">
            Project artwork is temporary. Real screenshots and detailed case
            studies will replace these previews before the portfolio launches.
          </p>
        </div>
      </section>

      <section className="section-shell services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">HOW I CAN HELP</p>
            <h2>Good software starts with understanding the problem.</h2>
            <p className="section-intro">
              Whether you need a website, a complete application or help
              connecting the tools you already use, we can work out the right
              solution together.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-detail">{service.detail}</span>
                </div>
                <span className="service-corner" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell process-section" id="process">
        <div className="container process-layout">
          <div className="process-intro">
            <p className="eyebrow">A CLEAR WAY FORWARD</p>
            <h2>From “I have an idea” to “It’s live.”</h2>
            <p>
              You don’t need to arrive with a technical specification. We
              start by understanding what you need, then decide together what
              makes sense to build.
            </p>
            <a className="text-link" href={discoveryHref}>
              Let’s talk about your idea <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="process-list">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="container about-grid">
          <div className="about-mark" aria-hidden="true">
            <div className="about-mark-ring" />
            <span>BAS</span>
            <small>BUILD · LEARN · IMPROVE</small>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curious about how things work. Serious about making them useful.</h2>
            <p>
              I’m Babatunde Abeeb Seun, a self-taught full-stack developer who
              enjoys turning complex ideas into practical software. I work
              across the frontend, backend, APIs and integrations, with a
              focus on building products that are clear to use and dependable
              behind the scenes.
            </p>
            <p>
              I also founded <strong>Abeeb Digital Studio</strong>, a separate
              digital-services business. This portfolio is my personal home
              on the web.
            </p>
            <div className="about-links">
              <a className="text-link" href={"mailto:" + site.email}>
                Email me <span aria-hidden="true">↗</span>
              </a>
              <span className="coming-soon">CV PDF · coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="container contact-panel">
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-content">
            <p className="eyebrow eyebrow-light">HAVE SOMETHING IN MIND?</p>
            <h2>Let’s work out what we should build.</h2>
            <p>
              Tell me what you’re trying to achieve. We’ll talk through the
              problem, explore the options and figure out a sensible next step.
            </p>
            <div className="contact-actions">
              <a className="button button-light" href={discoveryHref}>
                Book a discovery call <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline-light" href={site.whatsappUrl} target="_blank" rel="noreferrer">
                Chat on WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="contact-email">
              Prefer email? <a href={"mailto:" + site.email}>{site.email}</a>
            </p>
          </div>
          <div className="contact-side-note">
            <span>THE FIRST STEP</span>
            <strong>A good conversation.</strong>
            <span>No pressure. No jargon. Just a clearer idea of what’s possible.</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <a className="wordmark footer-wordmark" href="#top">BAS<span>.</span></a>
            <p>Building useful digital products, one problem at a time.</p>
          </div>
          <div className="footer-contact">
            <span>START A CONVERSATION</span>
            <a href={"mailto:" + site.email}>{site.email}</a>
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
              {site.phoneDisplay} · WhatsApp
            </a>
          </div>
          <div className="footer-socials">
            <span>ELSEWHERE</span>
            {site.linkedinUrl ? (
              <a href={site.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            ) : (
              <span className="social-placeholder">LinkedIn · updating soon</span>
            )}
            {site.xUrl ? (
              <a href={site.xUrl} target="_blank" rel="noreferrer">X ↗</a>
            ) : (
              <span className="social-placeholder">X · updating soon</span>
            )}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Babatunde Abeeb Seun</span>
          <span>Personal portfolio · Abeeb Digital Studio is a separate business</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
