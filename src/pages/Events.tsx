import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Events() {
  return <div className="inner-page"><SEO title="Technology Events & Workshops | GryphalCode" description="Find GryphalCode technology talks, software engineering workshops, developer sessions, and community events as the event calendar grows." path="/events" /><section className="page-hero"><p className="eyebrow">TECHNOLOGY EVENTS & WORKSHOPS</p><h1>Practical technology,<br /><span>shared with the community.</span></h1><p>Follow GryphalCode for software engineering talks, technology workshops, developer sessions, and community events as our event calendar develops.</p></section><section className="section empty-state"><span>EVENTS COMING SOON</span><h2>Upcoming software engineering events, workshops, and community sessions will appear here once the GryphalCode event calendar is established.</h2><div className="empty-state-visual"><img src="/images/events-visual.svg" alt="Technology workshop and software engineering event illustration" width="800" height="500" /></div><NavLink className="text-link" to="/contact">Contact GryphalCode <ArrowUpRight size={16} /></NavLink></section></div>
}
