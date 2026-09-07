import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function About() {
  return (
    <div className="inner-page">
      <SEO title="About GryphalCode | Software Development Company" description="Learn about GryphalCode, a Coimbatore software development company focused on custom software, web applications, cloud systems, and practical technology solutions." path="/about" />
      <section className="page-hero">
        <p className="eyebrow">ABOUT GRYPHALCODE</p>
        <h1>Software engineering<br /><span>with a clear purpose.</span></h1>
        <p>GryphalCode is a software development company in Coimbatore focused on practical, dependable digital products, business applications, and technology solutions.</p>
      </section>
      <section className="page-visual"><img src="/images/about-visual.svg" alt="Software product engineering and system architecture illustration" width="800" height="500" /></section>
      <section className="section content-grid">
        <div className="section-label">01 / SOFTWARE ENGINEERING APPROACH</div>
        <div className="prose"><h2>We start with the business problem.</h2><p>Good software is not about adding technology for its own sake. We learn how a business operates, identify where software can create useful leverage, and design systems around real users, workflows, integrations, and requirements.</p><p>Our approach combines clear communication with thoughtful engineering, helping businesses build software that is reliable today and maintainable as requirements change.</p></div>
      </section>
      <section className="section values-grid">
        {['Clarity', 'Reliability', 'Practicality', 'Long-term thinking'].map((value, index) => <article key={value}><span>0{index + 1}</span><h3>{value}</h3><p>Make technology decisions that are understandable, useful in production, and aligned with business requirements.</p></article>)}
      </section>
      <section className="cta section"><p className="eyebrow">CUSTOM SOFTWARE · WEB · MOBILE · CLOUD</p><h2>Have a technology problem<br /><span>worth solving?</span></h2><NavLink className="primary-button" to="/contact">Talk to GryphalCode <ArrowUpRight size={17} /></NavLink></section>
    </div>
  )
}
