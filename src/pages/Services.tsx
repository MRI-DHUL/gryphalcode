import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const services = [
  ['01', 'Custom Software', 'Business applications, internal platforms, workflow systems, and purpose-built software.'],
  ['02', 'Web Development', 'Marketing sites, customer portals, dashboards, and high-performance web applications.'],
  ['03', 'Mobile Applications', 'Cross-platform and native mobile experiences designed for real-world usage.'],
  ['04', 'Cloud & Backend', 'APIs, databases, cloud infrastructure, integrations, and production systems.'],
  ['05', 'Software Modernization', 'Improve aging systems, architecture, performance, maintainability, and delivery.'],
  ['06', 'Technical Consulting', 'Architecture reviews, technology decisions, delivery planning, and engineering guidance.'],
]

export default function Services() {
  return <div className="inner-page"><section className="page-hero"><p className="eyebrow">CAPABILITIES</p><h1>Technology services<br /><span>built around outcomes.</span></h1><p>Choose the capability you need, or bring us the problem and we can shape the right technical approach.</p></section><section className="section service-list">{services.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div><NavLink to="/contact" aria-label={`Discuss ${title}`}><ArrowUpRight size={20} /></NavLink></article>)}</section><section className="cta section"><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Tell us what you're<br /><span>trying to solve.</span></h2><NavLink className="primary-button" to="/contact">Talk to GryphalCode <ArrowUpRight size={17} /></NavLink></section></div>
}
