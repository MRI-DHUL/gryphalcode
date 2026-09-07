import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Blog() {
  return <div className="inner-page"><SEO title="Software Engineering Blog | GryphalCode" description="Read practical GryphalCode insights on software engineering, web development, cloud architecture, APIs, security, performance, and technology strategy." path="/blog" /><section className="page-hero"><p className="eyebrow">SOFTWARE ENGINEERING BLOG</p><h1>Practical insights on<br /><span>software and technology.</span></h1><p>Useful articles from GryphalCode covering software architecture, web development, backend engineering, cloud infrastructure, security, performance, and technology decisions.</p></section><section className="section empty-state"><span>ARTICLES COMING SOON</span><h2>We are building a focused library of practical software engineering content for businesses, developers, and technology teams.</h2><div className="empty-state-visual"><img src="/images/insights-visual.svg" alt="Software engineering and technology insights illustration" width="800" height="500" /></div><NavLink className="text-link" to="/services">Explore software development services <ArrowUpRight size={16} /></NavLink></section></div>
}
