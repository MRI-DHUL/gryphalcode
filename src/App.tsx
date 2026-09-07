import { useState } from 'react'

const navItems = ['Home', 'About', 'Services', 'Case Studies', 'Blog', 'Events', 'Contact']

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="GryphalCode home">
          <span className="brand-mark">G</span>
          <span>Gryphal<span>Code</span></span>
        </a>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          <span /><span /><span />
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact">Let's Talk <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE · ENGINEERING · DIGITAL</p>
            <h1>We build software<br /><span>that moves businesses forward.</span></h1>
            <p className="hero-copy">GryphalCode helps businesses turn ideas, processes, and complex requirements into reliable digital products and software solutions.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">Start a conversation <span>↗</span></a>
              <a className="text-link" href="#services">Explore services <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-core">G</div>
            <div className="visual-dot dot-one" />
            <div className="visual-dot dot-two" />
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label">01 / ABOUT</div>
          <div>
            <h2>Technology should solve problems, not create more of them.</h2>
            <p>We take a practical approach to software engineering — understanding the problem first, then designing technology around the people and business that use it.</p>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-label">02 / SERVICES</div>
          <div className="service-grid">
            {[
              ['01', 'Custom Software', 'Purpose-built applications designed around your business.'],
              ['02', 'Web Development', 'Fast, responsive web experiences built for real users.'],
              ['03', 'Mobile Applications', 'Reliable mobile products for iOS and Android.'],
              ['04', 'Cloud & Backend', 'Secure, scalable infrastructure and backend systems.'],
            ].map(([number, title, text]) => (
              <article className="service-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}>↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta section" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's build something<br /><span>worth building.</span></h2>
          <a className="primary-button" href="mailto:hello@gryphalcode.com">Get in touch <span>↗</span></a>
        </section>
      </main>

      <footer className="footer">
        <div className="brand footer-brand"><span className="brand-mark">G</span><span>Gryphal<span>Code</span></span></div>
        <p>© {new Date().getFullYear()} GryphalCode. All rights reserved.</p>
      </footer>
    </div>
  )
}
