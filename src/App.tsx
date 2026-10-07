import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import {
  ContactPage,
  EventsPage,
  MenusPage,
  NotFoundPage,
  ReservationsPage,
  StoryPage,
} from './pages/SecondaryPages'

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': { title: 'Arethusa al tavolo | A table in the Litchfield Hills', description: 'Discover Arethusa al tavolo, its seasonal spirit, menus, and dining experience.' },
  '/menus': { title: 'Menus | Arethusa al tavolo', description: 'Explore menu categories at Arethusa al tavolo. Current menu details are being confirmed.' },
  '/our-story': { title: 'Our Story | Arethusa al tavolo', description: 'Learn about the connection between Arethusa al tavolo and Arethusa Farm Dairy.' },
  '/events': { title: 'Private Events | Arethusa al tavolo', description: 'Explore the possibility of a private gathering at Arethusa al tavolo.' },
  '/contact': { title: 'Visit | Arethusa al tavolo', description: 'Plan a visit to Arethusa al tavolo. Current address and contact details are being verified.' },
  '/reservations': { title: 'Reservations | Arethusa al tavolo', description: 'Find current reservation information for Arethusa al tavolo.' },
}

function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] ?? {
      title: 'Page not found | Arethusa al tavolo',
      description: 'The page you are looking for could not be found.',
    }
    document.title = metadata.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) description.content = metadata.description
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="menus" element={<MenusPage />} />
          <Route path="our-story" element={<StoryPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="reservations" element={<ReservationsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
