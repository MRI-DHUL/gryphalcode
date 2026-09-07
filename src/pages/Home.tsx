import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  ['01', 'Custom Software Development', 'Purpose-built business software, internal platforms, workflow systems, and integrations.'],
  ['02', 'Web Development', 'Fast, responsive websites, portals, dashboards, and web applications built for users and search.'],
  ['03', 'Mobile App Development', 'Reliable mobile applications for iOS and Android with practical product and backend integration.'],
  ['04', 'Cloud & Backend Development', 'Secure APIs, databases, cloud infrastructure, integrations, and production-ready backend systems.'],
]
const capabilities = ['React', 'TypeScript', 'Node.js', 'REST APIs', 'SQL & NoSQL', 'Cloud Infrastructure', 'CI/CD', 'Third-party Integrations']
const industries = ['Business Operations', 'Professional Services', 'E-commerce', 'Startups & Growing Teams', 'Internal Business Systems', 'Customer-facing Platforms']
const process = [
  ['01', 'Discover', 'Understand the business problem, users, requirements, constraints, and desired outcome.'],
  ['02', 'Design', 'Define the solution, architecture, scope, technical priorities, and delivery plan.'],
  ['03', 'Build', 'Develop in focused iterations with testing, review points, and clear communication.'],
  ['04', 'Launch', 'Release a production-ready system with the foundations for security, performance, and ongoing improvement.'],
]

export default function Home() {
  return (
    <>
      <SEO title="GryphalCode | Software Development Company in Coimbatore" description="GryphalCode is a software development company in Coimbatore delivering custom software, web and mobile applications, cloud, backend, modernization, and technical consulting services." path="/" />
      <section className="hero page-section">
        <div className="hero-content"><p className="eyebrow">SOFTWARE DEVELOPMENT · ENGINEERING · DIGITAL</p><h1>Software solutions<br /><span>built for real business needs.</span></h1><p className="hero-copy">GryphalCode is a software development company in Coimbatore helping businesses turn ideas, workflows, and complex requirements into reliable digital products and business software.</p><div className="hero-actions"><NavLink className="primary-button" to="/contact">Discuss your project <ArrowUpRight size={17} /></NavLink><NavLink className="text-link" to="/services">Explore software services <ArrowRight size={16} /></NavLink></div></div>
        <div className="hero-visual"><img src="/images/hero-visual.svg" alt="Software architecture and digital product engineering illustration" width="800" height="600" fetchPriority="high" decoding="async" /></div>
      </section>
      <section className="intro section"><div className="section-label">01 / ABOUT</div><div className="section-copy"><h2>Practical software engineering for businesses.</h2><p>We start with the business problem, understand how people and systems work today, and then design technology around measurable requirements. Our focus is reliable software that is maintainable, secure, and useful in production.</p><NavLink className="text-link" to="/about">About GryphalCode <ArrowUpRight size={16} /></NavLink></div></section>
      <section className="services section"><div className="section-heading"><div className="section-label">02 / SOFTWARE SERVICES</div><p>Software development services covering product engineering, web and mobile development, cloud infrastructure, and backend systems.</p></div><div className="service-grid">{services.map(([number, title, text]) => <article className="service-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><NavLink to="/services" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></NavLink></article>)}</div></section>
      <section className="capabilities section"><div className="section-label">03 / TECHNOLOGY CAPABILITIES</div><div className="section-heading capabilities-heading"><h2>Modern technology.<br /><span>Production-minded engineering.</span></h2><p>We choose technologies around product requirements, balancing delivery speed, maintainability, security, performance, and long-term cost.</p></div><div className="capability-list">{capabilities.map((item) => <span key={item}><Check size={15} />{item}</span>)}</div></section>
      <section className="process section"><div className="section-label">04 / SOFTWARE DEVELOPMENT PROCESS</div><div className="process-grid">{process.map(([number, title, text]) => <article className="process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="industries section"><div className="section-label">05 / INDUSTRIES & USE CASES</div><div className="section-heading"><h2>Technology for businesses<br /><span>with something important to build.</span></h2><p>We support businesses building digital products, customer-facing platforms, internal systems, and software that improves everyday operations.</p></div><div className="industry-grid">{industries.map((item, index) => <div className="industry-item" key={item}><span>0{index + 1}</span>{item}</div>)}</div></section>
      <section className="work-preview section"><div className="section-label">06 / CASE STUDIES</div><div className="work-preview-inner"><div><p className="eyebrow">SELECTED WORK</p><h2>Real projects.<br /><span>Real constraints.</span></h2></div><div className="work-preview-content"><img src="/images/work-visual.svg" alt="Software project delivery and performance dashboard illustration" width="800" height="500" loading="lazy" decoding="async" /><p>Detailed GryphalCode case studies will be published as projects are completed and approved for publication, with the challenge, approach, technology, and outcomes documented clearly.</p><NavLink className="text-link" to="/case-studies">View software case studies <ArrowUpRight size={16} /></NavLink></div></div></section>
      <section className="cta section"><p className="eyebrow">SOFTWARE PROJECTS · WEB · MOBILE · CLOUD</p><h2>Have a software project<br /><span>worth building?</span></h2><NavLink className="primary-button" to="/contact">Contact GryphalCode <ArrowUpRight size={17} /></NavLink></section>
    </>
  )
}
