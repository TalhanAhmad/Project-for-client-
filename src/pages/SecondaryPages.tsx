import { useState } from 'react'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InquiryForm } from '../components/InquiryForm'
import { menuSections, photography, restaurant, type MenuCategory } from '../data/site'

function PageHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <header className="page-hero">
      <div className="wrap page-hero-row">
        <div><p className="eyebrow">{eyebrow}</p><h1 className="display">{title}</h1></div>
        <p className="body-copy">{intro}</p>
      </div>
    </header>
  )
}

export function MenusPage() {
  const [selected, setSelected] = useState<MenuCategory>('Dinner')
  const section = menuSections.find((item) => item.category === selected)

  return <>
    <PageHeading eyebrow="At the table" title="Menus" intro="A sense of the season, brought to the table. Menu details are being confirmed against the restaurant’s current published menus." />
    <section className="page-content"><div className="wrap">
      <div className="menu-tabs" aria-label="Menu categories">
        {menuSections.map(({ category }) => <button className="menu-tab" key={category} type="button" aria-pressed={selected === category} onClick={() => setSelected(category)}>{category}</button>)}
      </div>
      <div className="menu-state" aria-live="polite">
        <p className="eyebrow">{section?.category} menu</p>
        {section?.items.length ? <div>{section.items.map((item) => <article key={item.name}><h2>{item.name}</h2><p>{item.description} <span>{item.price}</span></p></article>)}</div> : <>
          <h2>Current selections are being confirmed.</h2>
          <p>We are not publishing dishes, prices, or wine details until they can be checked against the restaurant’s current menu. Please visit the official website for the latest information.</p>
          <a className="text-link" href={restaurant.referenceUrl} target="_blank" rel="noreferrer">Visit the official website <ArrowUpRight size={13} aria-hidden="true" /></a>
        </>}
      </div>
      <p className="menu-notice">Menus and availability are subject to change. Please confirm details with the restaurant before your visit.</p>
    </div></section>
  </>
}

export function StoryPage() {
  return <>
    <PageHeading eyebrow="A little about us" title="Our story" intro="A restaurant connected to Arethusa Farm Dairy, with a shared appreciation for careful making and the pleasure of gathering." />
    <section className="page-content"><div className="wrap story-grid">
      <div className="story-copy">
        <p className="eyebrow">A connection to the land</p>
        <h2 className="section-heading">The best stories are shared.</h2>
        <p className="body-copy">Arethusa al tavolo and Arethusa Farm Dairy share a name and a connection. At the restaurant, that relationship meets the rhythm of the seasons and the pleasure of sitting down together.</p>
        <p className="body-copy">The details matter: what is in season, who is gathered, and the welcome waiting when you arrive. This is a place for a meal worth lingering over.</p>
        <p className="story-callout">A thoughtful table, a little time, and something good to share.</p>
        <Link className="text-link" to="/reservations">Join us at the table <ArrowRight size={14} aria-hidden="true" /></Link>
      </div>
      <div className="image-frame story-photo"><img className="photo" src={photography.farm} alt="Green farmland in soft evening light" loading="lazy" width="1300" height="1500" /></div>
    </div></section>
  </>
}

export function EventsPage() {
  return <>
    <PageHeading eyebrow="Gather together" title="Events" intro="Some occasions deserve a table of their own. Share a few details and explore the possibility of a private gathering." />
    <section className="page-content"><div className="wrap">
      <div className="story-grid">
        <div className="story-copy">
          <p className="eyebrow">For your people</p><h2 className="section-heading">A reason to gather.</h2>
          <p className="body-copy">From a meaningful milestone to an evening with colleagues, Arethusa al tavolo offers a setting for coming together. Event formats, capacities, and availability have not been verified here.</p>
          <p className="body-copy" style={{ marginTop: 16 }}>For confirmed event information, contact the restaurant through its official website.</p>
          <a className="text-link" href={restaurant.referenceUrl} target="_blank" rel="noreferrer">Official website <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
        <div className="image-frame story-photo"><img className="photo" src={photography.event} alt="A candlelit dinner table prepared for a gathering" loading="lazy" width="1500" height="1200" /></div>
      </div>
      <div className="split-section" style={{ marginTop: 78 }}>
        <div><p className="eyebrow">Start a conversation</p><h2 className="section-heading">Tell us what you have in mind.</h2><p className="body-copy">This local form preview does not deliver a message. Use the restaurant’s official website for a real inquiry.</p></div>
        <InquiryForm kind="event" />
      </div>
    </div></section>
  </>
}

export function ContactPage() {
  return <>
    <PageHeading eyebrow="We would love to welcome you" title="Visit" intro="Find your way to the table, check the latest hours, or get in touch. Confirmed visit details are being gathered." />
    <section className="page-content"><div className="wrap">
      <div className="split-section">
        <div><p className="eyebrow">Plan your visit</p><h2 className="section-heading">We’ll save you a place.</h2><div className="contact-details">
          <div className="detail-block"><h2>Address</h2><p className="detail-unavailable">Not verified in this preview</p></div>
          <div className="detail-block"><h2>Phone and email</h2><p className="detail-unavailable">Current contact details are being verified. Please use the official website linked below.</p></div>
          <div className="detail-block"><h2>Hours and parking</h2><p className="detail-unavailable">Current hours and parking information are not verified.</p></div>
        </div></div>
        <div><div className="map-panel"><MapPin size={24} aria-hidden="true" /><p>Location details will appear here once confirmed.</p></div><a className="text-link" href={restaurant.referenceUrl} target="_blank" rel="noreferrer">Restaurant’s official website <ArrowUpRight size={13} aria-hidden="true" /></a></div>
      </div>
      <div className="split-section" style={{ marginTop: 80 }}>
        <div><p className="eyebrow">A note to the restaurant</p><h2 className="section-heading">How can we help?</h2><p className="body-copy">This preview form validates locally but does not send or save your information. For a real response, use the official website.</p></div>
        <InquiryForm kind="contact" />
      </div>
    </div></section>
  </>
}

export function ReservationsPage() {
  return <>
    <PageHeading eyebrow="Your table awaits" title="Reservations" intro="For the latest availability and booking guidance, please use the restaurant’s official website or contact details." />
    <section className="page-content"><div className="wrap">
      <div className="reservation-panel">
        <div><p className="eyebrow">Make a plan</p><h2>Book directly with the restaurant.</h2><p>The current OpenTable booking URL and telephone number could not be verified for this preview, so no booking link or phone number is shown here.</p></div>
        <div><p className="reservation-note">For accurate availability, booking policies, and any day-of-visit guidance, continue to the official restaurant website.</p><a className="button" href={restaurant.referenceUrl} target="_blank" rel="noreferrer">Official website <ArrowUpRight size={14} aria-hidden="true" /></a></div>
      </div>
      <div className="reservation-note" style={{ marginTop: 30, borderTop: 0 }}>This website does not take reservations or show live availability.</div>
    </div></section>
  </>
}

export function NotFoundPage() {
  return <section className="not-found"><p className="eyebrow">A turn in the road</p><h1 className="display">Not found.</h1><p>It looks like this page isn’t on the menu. Let’s get you back to the table.</p><Link className="button" to="/">Return home <ArrowRight size={14} aria-hidden="true" /></Link></section>
}