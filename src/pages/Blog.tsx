import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Blog() {
  return <div className="inner-page"><SEO title="Software & Technology Insights | GryphalCode" description="Practical GryphalCode articles on software engineering, architecture, security, performance, and technology for business." path="/blog" /><section className="page-hero"><p className="eyebrow">INSIGHTS</p><h1>Ideas on software,<br /><span>technology, and business.</span></h1><p>Practical articles from the GryphalCode team. No filler, no keyword stuffing — just useful technical thinking.</p></section><section className="section empty-state"><span>COMING SOON</span><h2>The first articles will cover engineering decisions, software architecture, security, performance, and building technology that supports business.</h2><div className="empty-state-visual"><img src="/images/insights-visual.svg" alt="Abstract technical editorial illustration for GryphalCode insights" /></div><NavLink className="text-link" to="/contact">Work with us <ArrowUpRight size={16} /></NavLink></section></div>
}
