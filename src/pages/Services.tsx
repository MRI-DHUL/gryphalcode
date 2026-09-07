import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  ['01', 'Custom Software Development', 'Business applications, internal platforms, workflow automation, APIs, and purpose-built software.', 'software-development'],
  ['02', 'Web Development', 'Business websites, customer portals, dashboards, and high-performance web applications.', 'web-development'],
  ['03', 'Mobile App Development', 'Cross-platform and native mobile applications for practical iOS and Android experiences.', 'mobile-applications'],
  ['04', 'Cloud & Backend Development', 'APIs, databases, cloud infrastructure, integrations, deployment, and production backend systems.', 'cloud-backend'],
  ['05', 'Software Modernization', 'Modernize legacy applications, architecture, performance, integrations, and development workflows.', 'software-modernization'],
  ['06', 'Technical Consulting', 'Software architecture reviews, technology selection, delivery planning, and engineering guidance.', 'technical-consulting'],
]

export default function Services() {
  return <div className="inner-page"><SEO title="Software Development Services | GryphalCode" description="GryphalCode provides custom software development, web development, mobile app development, cloud and backend engineering, software modernization, and technical consulting." path="/services" /><section className="page-hero"><p className="eyebrow">SOFTWARE DEVELOPMENT SERVICES</p><h1>Technology services<br /><span>built around business needs.</span></h1><p>From custom software and web applications to mobile apps, cloud infrastructure, modernization, and technical consulting, GryphalCode provides practical engineering for real business requirements.</p></section><section className="page-visual"><img src="/images/services-visual.svg" alt="Software development lifecycle showing planning, engineering, integration, and deployment" width="800" height="500" /></section><section className="section service-list">{services.map(([number, title, text, slug]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div><NavLink to={`/services/${slug}`} aria-label={`Learn more about ${title}`}><ArrowUpRight size={20} /></NavLink></article>)}</section><section className="cta section"><p className="eyebrow">NEED SOFTWARE DEVELOPMENT?</p><h2>Tell us what you're<br /><span>trying to build or improve.</span></h2><NavLink className="primary-button" to="/contact">Contact GryphalCode <ArrowUpRight size={17} /></NavLink></section></div>
}
