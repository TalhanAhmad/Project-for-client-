export type MenuCategory = 'Dinner' | 'Wine' | 'Beverages'

export type MenuItem = {
  name: string
  description: string
  price: string
}

export type MenuSection = {
  category: MenuCategory
  items: MenuItem[]
}

export const restaurant = {
  name: 'Arethusa al tavolo',
  descriptor: 'A table in the Litchfield Hills',
  dairyName: 'Arethusa Farm Dairy',
  address: null as string | null,
  phone: null as string | null,
  email: null as string | null,
  hours: null as string | null,
  openTableUrl: null as string | null,
  directionsUrl: null as string | null,
  referenceUrl: 'https://www.arethusaaltavolo.com/',
}

export const navigation = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Menus', href: '/menus' },
  { label: 'Events', href: '/events' },
  { label: 'Visit', href: '/contact' },
  { label: 'Reservations', href: '/reservations' },
]

export const menuSections: MenuSection[] = [
  { category: 'Dinner', items: [] },
  { category: 'Wine', items: [] },
  { category: 'Beverages', items: [] },
]

export const photography = {
  hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=85',
  diningRoom: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1300&q=82',
  diningTable: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=82',
  platedDish: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1100&q=82',
  seasonalDish: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=82',
  farm: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=82',
  event: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1500&q=82',
  story: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1300&q=82',
}