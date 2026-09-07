import { ArrowUpRight, Check } from 'lucide-react'
import { NavLink, useParams } from 'react-router-dom'
import SEO from '../components/SEO'

const serviceData: Record<string, { title: string; description: string; points: string[] }> = {
  'software-development': {
    title: 'Custom Software Development',
    description: 'Purpose-built business software designed around real workflows, users, integrations, and long-term maintainability.',
    points: ['Business applications and internal platforms', 'Workflow automation and operational systems', 'APIs, integrations, and data-driven features', 'Production-ready architecture and delivery'],
  },
  'web-development': {
    title: 'Web Development',
    description: 'Fast, responsive web experiences built to communicate clearly, perform well, and support business goals.',
    points: ['Corporate and marketing websites', 'Customer portals and dashboards', 'Responsive application interfaces', 'Performance, accessibility, and technical SEO'],
  },
  'mobile-applications': {
    title: 'Mobile Application Development',
    description: 'Mobile products designed for reliable everyday use across iOS and Android.',
    points: ['Cross-platform application development', 'Native mobile experiences', 'API and backend integration', 'Release-ready application architecture'],
  },
  'cloud-backend': {
    title: 'Cloud & Backend Engineering',
    description: 'Secure backend systems and cloud infrastructure that give applications a dependable production foundation.',
    points: ['REST APIs and backend services', 'Database design and integrations', 'Cloud infrastructure and deployment', 'Security, observability, and scalability'],
  },
  'software-modernization': {
    title: 'Software Modernization',
    description: 'Improve aging software without replacing everything blindly — reduce technical risk while creating a path forward.',
    points: ['Architecture and codebase assessment', 'Incremental modernization plans', 'Performance and maintainability improvements', 'Migration and integration strategy'],
  },
  'technical-consulting': {
    title: 'Technical Consulting',
    description: 'Focused engineering guidance for architecture, technology decisions, delivery planning, and technical risk.',
    points: ['Architecture reviews and technical assessments', 'Technology selection and trade-offs', 'Delivery planning and technical roadmaps', 'Engineering process and quality guidance'],
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = slug ? serviceData[slug] : undefined

  if (!service) {
    return <div className="inner-page"><SEO title="Service Not Found | GryphalCode" description="The requested GryphalCode service could not be found." path={`/services/${slug ?? ''}`} /><section className="page-hero"><p className="eyebrow">SERVICE</p><h1>Service not<br /><span>found.</span></h1><p>The requested service page does not exist.</p><NavLink className="primary-button" to="/services">View all services <ArrowUpRight size={17} /></NavLink></section></div>
  }

  return <div className="inner-page"><SEO title={`${service.title} | GryphalCode`} description={service.description} path={`/services/${slug}`} /><section className="page-hero"><p className="eyebrow">GRYPHALCODE SERVICES</p><h1>{service.title}<br /><span>built for the real world.</span></h1><p>{service.description}</p><NavLink className="primary-button" to="/contact">Discuss your project <ArrowUpRight size={17} /></NavLink></section><section className="section detail-grid"><div className="section-label">WHAT WE CAN HELP WITH</div><div><h2>Focused engineering,<br /><span>clear outcomes.</span></h2><div className="detail-points">{service.points.map((point) => <div key={point}><Check size={17} />{point}</div>)}</div></div></section><section className="cta section"><p className="eyebrow">READY TO START?</p><h2>Bring us the problem.<br /><span>We'll shape the solution.</span></h2><NavLink className="primary-button" to="/contact">Start a conversation <ArrowUpRight size={17} /></NavLink></section></div>
}
