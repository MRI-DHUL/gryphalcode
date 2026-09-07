import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const services = [
  ['01', 'Custom Software', 'Purpose-built applications designed around your business.'],
  ['02', 'Web Development', 'Fast, responsive web experiences built for real users.'],
  ['03', 'Mobile Applications', 'Reliable mobile products for iOS and Android.'],
  ['04', 'Cloud & Backend', 'Secure, scalable infrastructure and backend systems.'],
]

export default function Home() {
  return (
    <>
      <section className="hero page-section">
        <div className="hero-content">
          <p className="eyebrow">SOFTWARE · ENGINEERING · DIGITAL</p>
          <h1>We build software<br /><span>that moves businesses forward.</span></h1>
          <p className="hero-copy">GryphalCode helps businesses turn ideas, processes, and complex requirements into reliable digital products and software solutions.</p>
          <div className="hero-actions">
            <NavLink className="primary-button" to="/contact">Start a conversation <ArrowUpRight size={17} /></NavLink>
            <NavLink className="text-link" to="/services">Explore services <ArrowDown size={16} /></NavLink>
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

      <section className="intro section">
        <div className="section-label">01 / ABOUT</div>
        <div className="section-copy">
          <h2>Technology should solve problems, not create more of them.</h2>
          <p>We take a practical approach to software engineering — understanding the problem first, then designing technology around the people and business that use it.</p>
          <NavLink className="text-link" to="/about">More about GryphalCode <ArrowUpRight size={16} /></NavLink>
        </div>
      </section>

      <section className="services section">
        <div className="section-heading">
          <div className="section-label">02 / SERVICES</div>
          <p>Focused engineering capabilities without unnecessary complexity.</p>
        </div>
        <div className="service-grid">
          {services.map(([number, title, text]) => (
            <article className="service-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <NavLink to="/services" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section section">
        <div className="section-label">03 / APPROACH</div>
        <div>
          <p className="eyebrow">BUILT FOR THE LONG TERM</p>
          <h2>Clear thinking. Solid engineering. <span>Useful outcomes.</span></h2>
          <p>From first requirements to production and ongoing improvement, we keep decisions grounded in business value, maintainability, security, and performance.</p>
        </div>
      </section>

      <section className="cta section">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let's build something<br /><span>worth building.</span></h2>
        <NavLink className="primary-button" to="/contact">Get in touch <ArrowUpRight size={17} /></NavLink>
      </section>
    </>
  )
}
