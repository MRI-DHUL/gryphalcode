import { ArrowUpRight, Check } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'
import './case-studies.css'

const principles = [
  ['01', 'The challenge', 'What the business needed to improve, change, automate, or build.'],
  ['02', 'The approach', 'The software architecture, engineering decisions, and delivery path used to solve it.'],
  ['03', 'The outcome', 'The measurable business or technical result, where reliable data and client approval allow publication.'],
]

const standards = [
  'Real software project context, not generic portfolio filler',
  'Clear technical decisions, architecture, and trade-offs',
  'Measured business or engineering outcomes where verified',
  'Client names, screenshots, and technical details only with approval',
]

export default function CaseStudies() {
  return (
    <div className="inner-page">
      <SEO title="Software Development Case Studies | GryphalCode" description="Explore GryphalCode software development case studies covering business challenges, technical approaches, architecture, implementation, and measurable outcomes." path="/case-studies" />
      <section className="page-hero">
        <p className="eyebrow">SOFTWARE DEVELOPMENT CASE STUDIES</p>
        <h1>Engineering decisions<br /><span>in the real world.</span></h1>
        <p>See how software projects are approached, engineered, and delivered when business requirements, technical constraints, and production realities matter.</p>
      </section>

      <section className="section case-studies-intro">
        <div>
          <p className="eyebrow">CASE STUDY STANDARD</p>
          <h2>Real challenges.<br /><span>Clear engineering.</span></h2>
          <p>GryphalCode case studies will explain the business challenge, technical approach, software architecture, implementation decisions, and measurable outcome without hiding the constraints behind the project.</p>
          <div className="case-studies-note">
            <strong>What each story will cover:</strong>
            <div className="case-study-standards">
              {standards.map((item) => <div key={item}><Check size={17} />{item}</div>)}
            </div>
          </div>
        </div>
        <div className="case-studies-visual">
          <img src="/images/work-visual.svg" alt="Software delivery dashboard representing project architecture, engineering work, and technical outcomes" width="800" height="500" />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">HOW WE DOCUMENT SOFTWARE PROJECTS</p>
        <div className="case-study-principles">
          {principles.map(([number, title, text]) => (
            <article className="case-study-principle" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta section">
        <p className="eyebrow">CUSTOM SOFTWARE · WEB · MOBILE · CLOUD</p>
        <h2>Have a project that needs<br /><span>strong engineering?</span></h2>
        <NavLink className="primary-button" to="/contact">Discuss your software project <ArrowUpRight size={17} /></NavLink>
      </section>
    </div>
  )
}
