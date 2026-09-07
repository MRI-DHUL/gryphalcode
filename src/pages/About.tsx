import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function About() {
  return (
    <div className="inner-page">
      <SEO title="About GryphalCode | Software Engineering" description="Learn how GryphalCode approaches software engineering, technology decisions, and practical digital solutions for businesses." path="/about" />
      <section className="page-hero">
        <p className="eyebrow">ABOUT GRYPHALCODE</p>
        <h1>Engineering technology<br /><span>with a reason.</span></h1>
        <p>GryphalCode is a technology company focused on building practical, dependable software for businesses.</p>
      </section>
      <section className="section content-grid">
        <div className="section-label">01 / WHO WE ARE</div>
        <div className="prose"><h2>We start with the problem.</h2><p>Good software is not about adding technology for its own sake. We learn how a business operates, identify where technology can create leverage, and build systems that people can actually use.</p><p>Our aim is straightforward: clear communication, thoughtful engineering, and software that remains useful as the business grows.</p></div>
      </section>
      <section className="section values-grid">
        {['Clarity', 'Reliability', 'Practicality', 'Long-term thinking'].map((value, index) => <article key={value}><span>0{index + 1}</span><h3>{value}</h3><p>Make decisions that are understandable, measurable, and useful in production.</p></article>)}
      </section>
      <section className="cta section"><p className="eyebrow">WORK WITH US</p><h2>Have a problem<br /><span>worth solving?</span></h2><NavLink className="primary-button" to="/contact">Start a conversation <ArrowUpRight size={17} /></NavLink></section>
    </div>
  )
}
