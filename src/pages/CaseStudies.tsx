import { ArrowUpRight, Check } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'
import './case-studies.css'

const principles = [
  ['01', 'The challenge', 'What the business needed to improve, change, or build.'],
  ['02', 'The approach', 'The engineering decisions, architecture, and delivery path used to solve it.'],
  ['03', 'The outcome', 'The measurable business or technical result, where the client has approved publication.'],
]

const standards = [
  'Real project context, not generic portfolio filler',
  'Clear technical decisions and trade-offs',
  'Measured outcomes whenever reliable data is available',
  'Client names, screenshots, and details only with approval',
]

export default function CaseStudies() {
  return (
    <div className="inner-page">
      <SEO
        title="Case Studies | GryphalCode"
        description="Explore GryphalCode software projects, engineering approaches, technical decisions, and measurable outcomes as case studies are published."
        path="/case-studies"
      />
      <section className="page-hero">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>Work that shows<br /><span>how we think.</span></h1>
        <p>We are building this section around real engineering work — the problem, the decisions, the implementation, and the result.</p>
      </section>

      <section className="section case-studies-intro">
        <div>
          <p className="eyebrow">CASE STUDY STANDARD</p>
          <h2>No invented projects.<br /><span>No inflated metrics.</span></h2>
          <p>GryphalCode case studies will be published as projects become complete and clients approve the information for public use. That keeps the portfolio useful and credible.</p>
          <div className="case-studies-note">
            <strong>What each story will cover:</strong>
            <div className="case-study-standards">
              {standards.map((item) => <div key={item}><Check size={17} />{item}</div>)}
            </div>
          </div>
        </div>
        <div className="case-studies-visual">
          <img src="/images/work-visual.svg" alt="Abstract software delivery dashboard representing project work and engineering outcomes" width="800" height="500" />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">HOW WE DOCUMENT THE WORK</p>
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
        <p className="eyebrow">HAVE A PROJECT TO DISCUSS?</p>
        <h2>Your project could be<br /><span>the next story.</span></h2>
        <NavLink className="primary-button" to="/contact">Discuss your project <ArrowUpRight size={17} /></NavLink>
      </section>
    </div>
  )
}
