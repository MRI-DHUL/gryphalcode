import { useEffect } from 'react'
import { ArrowUpRight, Clock3, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import './contact.css'

const address = '12/26, LakshmiPuram, Ganapathy, Coimbatore, Tamil Nadu - 641006, India'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=12%2F26%2C%20LakshmiPuram%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu%20641006%2C%20India'

export default function Contact() {
  useEffect(() => {
    const schemaId = 'gryphalcode-local-business-schema'
    let schema = document.getElementById(schemaId)

    if (!schema) {
      schema = document.createElement('script')
      schema.id = schemaId
      schema.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schema)
    }

    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'GryphalCode',
      url: 'https://gryphalcode.com/contact',
      email: 'info@gryphalcode.com',
      telephone: '+91 80722-80620',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12/26, LakshmiPuram, Ganapathy',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        postalCode: '641006',
        addressCountry: 'IN',
      },
      openingHours: 'Mo-Fr 10:00-19:00',
      areaServed: 'Worldwide',
      serviceType: ['Software development', 'Web development', 'Mobile app development', 'Cloud and backend development', 'Software modernization', 'Technical consulting'],
    })

    return () => schema?.remove()
  }, [])

  return (
    <div className="inner-page">
      <SEO title="Contact GryphalCode | Software Development in Coimbatore" description="Contact GryphalCode in Coimbatore for custom software development, web and mobile applications, cloud and backend engineering, modernization, and technical consulting." path="/contact" />
      <section className="page-hero">
        <p className="eyebrow">CONTACT GRYPHALCODE</p>
        <h1>Discuss your software<br /><span>project with our team.</span></h1>
        <p>Tell us what you are building, improving, automating, or trying to solve. Share the business context, requirements, timeline, and constraints, and we can discuss the right technical approach.</p>
      </section>
      <section className="page-visual">
        <img src="/images/contact-visual.svg" alt="GryphalCode software development partnership and technology network illustration" width="800" height="500" />
      </section>
      <section className="section contact-grid">
        <article className="contact-card">
          <div className="contact-icon"><Mail size={21} /></div>
          <div className="contact-content">
            <span className="contact-label">SOFTWARE PROJECT ENQUIRIES</span>
            <a className="contact-method" href="mailto:info@gryphalcode.com">
              <span>info@gryphalcode.com</span><ArrowUpRight size={17} />
            </a>
            <p className="contact-subtext">We typically respond within 1 business day.</p>
          </div>
        </article>
        <article className="contact-card">
          <div className="contact-icon"><Phone size={21} /></div>
          <div className="contact-content">
            <span className="contact-label">PHONE</span>
            <a className="contact-method" href="tel:+918072280620">
              <span>+91 80722-80620</span><ArrowUpRight size={17} />
            </a>
            <p className="contact-subtext">Mon - Fri, 10:00 AM - 7:00 PM (IST)</p>
          </div>
        </article>
        <article className="contact-card">
          <div className="contact-icon"><MapPin size={21} /></div>
          <div className="contact-content">
            <span className="contact-label">COIMBATORE OFFICE</span>
            <p className="contact-address">{address}</p>
            <a className="text-link contact-directions" href={mapUrl} target="_blank" rel="noreferrer">
              Get directions <ArrowUpRight size={15} />
            </a>
          </div>
        </article>
        <article className="contact-card">
          <div className="contact-icon"><Clock3 size={21} /></div>
          <div className="contact-content">
            <span className="contact-label">BUSINESS HOURS</span>
            <p className="contact-hours">Monday - Friday, 10:00 AM - 7:00 PM (IST)</p>
            <div className="contact-subline"><MessageSquare size={17} /> <span>Software project discussions by email or phone.</span></div>
          </div>
        </article>
      </section>
      <section className="section contact-note">
        <h2>What to include in your enquiry</h2>
        <p>Include your business context, the software or process you want to improve, what you already have, your target users, and any important timeline or technical constraints. You do not need a polished specification to start a conversation.</p>
      </section>
    </div>
  )
}
