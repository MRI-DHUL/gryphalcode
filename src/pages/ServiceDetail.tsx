import { ArrowUpRight, Check } from 'lucide-react'
import { NavLink, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import './service-detail.css'

type Service = {
  title: string
  description: string
  image: string
  imageAlt: string
  points: string[]
}

const serviceData: Record<string, Service> = {
  'software-development': { title: 'Custom Software Development', description: 'Custom business software designed around real workflows, users, integrations, security requirements, and long-term maintainability.', image: '/images/service-software-development.svg', imageAlt: 'Custom software architecture illustration showing application code, workflow logic, database, and cloud components', points: ['Business applications and internal platforms', 'Workflow automation and operational systems', 'REST APIs, integrations, and data-driven features', 'Production-ready architecture, testing, and delivery'] },
  'web-development': { title: 'Web Development', description: 'Fast, responsive websites and web applications built for usability, performance, accessibility, search visibility, and business goals.', image: '/images/service-web-development.svg', imageAlt: 'Web development illustration showing responsive website interfaces across desktop and mobile screens', points: ['Corporate and marketing websites', 'Customer portals and business dashboards', 'Responsive web application interfaces', 'Performance, accessibility, and technical SEO'] },
  'mobile-applications': { title: 'Mobile App Development', description: 'Reliable mobile applications for iOS and Android, designed around real user needs and integrated with dependable backend systems.', image: '/images/service-mobile-applications.svg', imageAlt: 'Mobile app development illustration showing iOS and Android application interfaces connected to software services', points: ['Cross-platform mobile application development', 'Native mobile experiences where appropriate', 'API, authentication, and backend integration', 'Release-ready application architecture and support'] },
  'cloud-backend': { title: 'Cloud & Backend Development', description: 'Secure backend systems, APIs, databases, and cloud infrastructure that provide applications with a dependable production foundation.', image: '/images/service-cloud-backend.svg', imageAlt: 'Cloud and backend architecture illustration showing cloud infrastructure, APIs, servers, databases, and security', points: ['REST APIs and backend services', 'Database architecture and third-party integrations', 'Cloud infrastructure, deployment, and CI/CD', 'Security, observability, performance, and scalability'] },
  'software-modernization': { title: 'Software Modernization', description: 'Modernize legacy software through practical architecture, code, infrastructure, and integration improvements without replacing everything blindly.', image: '/images/service-software-modernization.svg', imageAlt: 'Software modernization illustration showing a legacy system transitioning to a modern software architecture', points: ['Architecture and codebase assessment', 'Incremental modernization and migration plans', 'Performance, security, and maintainability improvements', 'Legacy integration and technology migration strategy'] },
  'technical-consulting': { title: 'Technical Consulting', description: 'Focused software engineering guidance for architecture, technology selection, delivery planning, technical risk, and engineering quality.', image: '/images/service-technical-consulting.svg', imageAlt: 'Technical consulting illustration showing software strategy, architecture, optimization, and engineering decisions', points: ['Architecture reviews and technical assessments', 'Technology selection and engineering trade-offs', 'Delivery planning and technical roadmaps', 'Engineering process, quality, security, and risk guidance'] },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = slug ? serviceData[slug] : undefined

  if (!service) {
    return <div className="inner-page"><SEO title="Service Not Found | GryphalCode" description="The requested GryphalCode software development service page could not be found." path={`/services/${slug ?? ''}`} /><section className="page-hero"><p className="eyebrow">SERVICE</p><h1>Service not<br /><span>found.</span></h1><p>The requested service page does not exist.</p><NavLink className="primary-button" to="/services">View software services <ArrowUpRight size={17} /></NavLink></section></div>
  }

  return <div className="inner-page">
    <SEO title={`${service.title} | GryphalCode`} description={service.description} path={`/services/${slug}`} />
    <section className="page-hero service-detail-hero">
      <div><p className="eyebrow">GRYPHALCODE SOFTWARE SERVICES</p><h1>{service.title}<br /><span>for real business needs.</span></h1><p>{service.description}</p><NavLink className="primary-button" to="/contact">Discuss your software project <ArrowUpRight size={17} /></NavLink></div>
      <div className="service-detail-visual"><img src={service.image} alt={service.imageAlt} width="800" height="500" /></div>
    </section>
    <section className="section detail-grid"><div className="section-label">SOFTWARE DEVELOPMENT CAPABILITIES</div><div><h2>Focused engineering,<br /><span>clear technical outcomes.</span></h2><div className="detail-points">{service.points.map((point) => <div key={point}><Check size={17} />{point}</div>)}</div></div></section>
    <section className="cta section"><p className="eyebrow">READY TO BUILD OR IMPROVE?</p><h2>Bring us the problem.<br /><span>We'll shape the solution.</span></h2><NavLink className="primary-button" to="/contact">Contact GryphalCode <ArrowUpRight size={17} /></NavLink></section>
  </div>
}
