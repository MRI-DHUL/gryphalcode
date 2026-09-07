import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function CaseStudies() {
  return <div className="inner-page"><SEO title="Case Studies | GryphalCode" description="Explore GryphalCode software projects, engineering approaches, technical decisions, and measurable outcomes as case studies are published." path="/case-studies" /><section className="page-hero"><p className="eyebrow">SELECTED WORK</p><h1>Work that shows<br /><span>how we think.</span></h1><p>Real case studies will be added here as GryphalCode projects are completed and approved for publication.</p></section><section className="section empty-state"><span>CASE STUDIES</span><h2>We will document the challenge, approach, technology, and measurable outcome of each published project.</h2><div className="empty-state-visual"><img src="/images/work-visual.svg" alt="Abstract project delivery dashboard showing software delivery and performance signals" /></div><NavLink className="text-link" to="/contact">Discuss a project <ArrowUpRight size={16} /></NavLink></section></div>
}
