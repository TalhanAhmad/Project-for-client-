import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { photography, restaurant } from '../data/site'

export function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <img className="hero-image" src={photography.hero} alt="Warmly lit dining room set for dinner" fetchPriority="high" width="2200" height="1467" />
        <div className="hero-content">
          <p className="eyebrow">A table in the Litchfield Hills</p>
          <h1 className="hero-title" id="home-title">Arethusa <span>al tavolo</span></h1>
          <p className="hero-copy">An invitation to slow down, gather close, and let the season take its place at the table.</p>
          <div className="hero-actions">
            <Link className="button" to="/reservations">Reservations <ArrowUpRight size={14} aria-hidden="true" /></Link>
            <Link className="button button--outline" to="/menus">Explore the menus <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
          <span className="hero-index">A table worth taking time for</span>
        </div>
      </section>

      <section className="section">
        <div className="wrap intro-grid">
          <p className="intro-mark">Benvenuti a tavola</p>
          <div className="intro-copy">
            <p className="eyebrow">The pleasure of being here</p>
            <h2 className="section-heading">Good food. Good company. No need to hurry.</h2>
            <p className="body-copy">At {restaurant.name}, the table is an invitation: to settle in, follow the seasons, and share a meal made memorable by the people around it.</p>
            <Link className="text-link" to="/our-story">A little more about us <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section dishes">
        <div className="wrap">
          <div className="section-top">
            <div>
              <p className="eyebrow">From the table</p>
              <h2 className="section-heading">Food, in its season.</h2>
            </div>
            <Link className="text-link" to="/menus">See the menus <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="dish-grid">
            <article>
              <div className="image-frame dish-image"><img className="photo" src={photography.platedDish} alt="Thoughtfully plated seasonal ingredients" loading="lazy" width="1100" height="1000" /></div>
              <div className="dish-caption"><h3>Season-led cooking</h3><span>At the table</span></div>
            </article>
            <article>
              <div className="image-frame dish-image"><img className="photo" src={photography.seasonalDish} alt="Fresh ingredients arranged for a shared meal" loading="lazy" width="1000" height="1000" /></div>
              <div className="dish-caption"><h3>Made to be shared</h3><span>In good company</span></div>
            </article>
            <article>
              <div className="image-frame dish-image"><img className="photo" src={photography.diningTable} alt="A warmly lit restaurant bar with stools and pendant lights" loading="lazy" width="1000" height="1000" /></div>
              <div className="dish-caption"><h3>A place to linger</h3><span>Take your time</span></div>
            </article>
          </div>
          <p className="dish-note">Photography is illustrative. Current dishes and menu details are being confirmed.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap farm-grid">
          <div className="image-frame farm-image"><img className="photo" src={photography.farm} alt="Rolling green farmland beneath a wide sky" loading="lazy" width="1400" height="1500" /></div>
          <div className="farm-copy">
            <p className="eyebrow">A story rooted in place</p>
            <h2 className="section-heading">From Arethusa Farm Dairy, to the table.</h2>
            <p className="body-copy">Arethusa al tavolo is connected to Arethusa Farm Dairy. That relationship is part of what makes this table distinct: a shared appreciation for care, craft, and the things that grow close to home.</p>
            <Link className="text-link" to="/our-story">Discover our story <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="experience" aria-label="The dining experience">
        <div className="wrap experience-grid">
          <div className="image-frame experience-main"><img className="photo" src={photography.diningRoom} alt="An intimate restaurant dining room ready for guests" loading="lazy" width="1300" height="1000" /></div>
          <div className="experience-side">
            <div className="image-frame experience-small"><img className="photo" src={photography.story} alt="Sunlight falling across a quiet landscape" loading="lazy" width="1000" height="800" /></div>
            <p className="experience-quote">“There is always room for one more at the table.”</p>
          </div>
        </div>
      </section>

      <section className="event-band">
        <div className="image-frame event-band-image"><img className="photo" src={photography.event} alt="A long table arranged for a gathering" loading="lazy" width="1500" height="1000" /></div>
        <div className="event-band-copy">
          <p className="eyebrow">Gather together</p>
          <h2 className="section-heading">Make room for a celebration.</h2>
          <p>Bring your people together around a table. Get in touch to explore a private gathering at Arethusa al tavolo.</p>
          <Link className="text-link" to="/events">Explore private events <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section visit">
        <div className="wrap">
          <div className="section-top">
            <div><p className="eyebrow">We look forward to welcoming you</p><h2 className="section-heading">Come take your seat.</h2></div>
            <Link className="text-link" to="/reservations">Plan your visit <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="visit-grid">
            <div className="visit-block"><h3>Find us</h3><p>{restaurant.address ?? 'Address details are being verified.'}</p></div>
            <div className="visit-block"><h3>Opening hours</h3><p>{restaurant.hours ?? 'Current opening hours are being verified.'}</p></div>
            <div className="visit-block"><h3>At the table</h3><p>For the most current reservation information, visit the restaurant’s official website.</p><a className="text-link" href={restaurant.referenceUrl} target="_blank" rel="noreferrer">Official website <ArrowUpRight size={13} aria-hidden="true" /></a></div>
          </div>
        </div>
      </section>
    </>
  )
}