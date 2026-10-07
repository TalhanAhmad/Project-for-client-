import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { navigation, restaurant } from '../data/site'

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" to="/" aria-label={`${restaurant.name} home`}>
            <span className="brand-name">Arethusa</span>
            <span className="brand-sub">al tavolo</span>
          </Link>
          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="button header-action" to="/reservations">
            Reserve a table <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Link className="brand" to="/">
                <span className="brand-name">Arethusa</span>
                <span className="brand-sub">al tavolo</span>
              </Link>
              <p>A place at the table, shaped by the seasons and the spirit of the Litchfield Hills.</p>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Explore</h2>
              <div className="footer-links">
                {navigation.map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Visit</h2>
              <p>Address and opening hours are being confirmed against the restaurant’s current published information.</p>
              <Link className="text-link" to="/contact">Contact details <ArrowUpRight size={13} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Arethusa al tavolo</span>
            <span>Seasonal menus and hours may change.</span>
          </div>
        </div>
      </footer>
    </>
  )
}