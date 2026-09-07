import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  ['01', 'Custom Software', 'Purpose-built applications designed around your business.'],
  ['02', 'Web Development', 'Fast, responsive web experiences built for real users.'],
  ['03', 'Mobile Applications', 'Reliable mobile products for iOS and Android.'],
  ['04', 'Cloud & Backend', 'Secure, scalable infrastructure and backend systems.'],
]

const capabilities = ['React', 'TypeScript', 'Node.js', 'REST APIs', 'SQL & NoSQL', 'Cloud Infrastructure', 'CI/CD', 'Third-party Integrations']
const industries = ['Business Operations', 'Professional Services', 'E-commerce', 'Startups & Growing Teams', 'Internal Business Systems', 'Customer-facing Platforms']
const process = [
  ['01', 'Discover', 'Understand the business problem, users, constraints, and desired outcome.'],
  ['02', 'Design', 'Shape the solution, architecture, scope, and technical priorities.'],
  ['03', 'Build', 'Develop in focused iterations with clear communication and review points.'],
  ['04', 'Launch', 'Release a production-ready system with the foundations for ongoing improvement.'],
]

export default function Home() {
  return (
    <>
      <SEO title="GryphalCode | Software Engineering & Technology Services" description="GryphalCode builds reliable software, web, mobile, cloud, and backend solutions for businesses." path="/" />
      <section className="hero page-section">
        <div className="hero-content">
          <p className="eyebrow">SOFTWARE · ENGINEERING · DIGITAL</p>
          <h1>We build software<br /><span>that moves businesses forward.</span></h1>
          <p className="hero-copy">GryphalCode helps businesses turn ideas, processes, and complex requirements into reliable digital products and software solutions.</p>
          <div className="hero-actions">
            <NavLink className="primary-button" to="/contact">Start a conversation <ArrowUpRight size={17} /></NavLink>
            <NavLink className="text-link" to="/services">Explore services <ArrowRight size={16} /></NavLink>
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
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
              <NavLink to="/services" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities section">
        <div className="section-label">03 / CAPABILITIES</div>
        <div className="section-heading capabilities-heading">
          <h2>Modern technology.<br /><span>Practical engineering.</span></h2>
          <p>We choose technology around the requirements of the product — balancing delivery speed, maintainability, security, and long-term cost.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => <span key={item}><Check size={15} />{item}</span>)}
        </div>
      </section>

      <section className="process section">
        <div className="section-label">04 / HOW WE WORK</div>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article className="process-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="industries section">
        <div className="section-label">05 / WHO WE WORK WITH</div>
        <div className="section-heading">
          <h2>Technology for businesses<br /><span>with something to build.</span></h2>
          <p>From new digital products to internal systems that need improvement, we focus on software with a clear business purpose.</p>
        </div>
        <div className="industry-grid">
          {industries.map((item, index) => <div className="industry-item" key={item}><span>0{index + 1}</span>{item}</div>)}
        </div>
      </section>

      <section className="work-preview section">
        <div className="section-label">06 / SELECTED WORK</div>
        <div className="work-preview-inner">
          <div><p className="eyebrow">CASE STUDIES</p><h2>Real projects.<br /><span>Real constraints.</span></h2></div>
          <div><p>We will publish detailed case studies as GryphalCode projects are completed and approved for publication.</p><NavLink className="text-link" to="/case-studies">View case studies <ArrowUpRight size={16} /></NavLink></div>
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
