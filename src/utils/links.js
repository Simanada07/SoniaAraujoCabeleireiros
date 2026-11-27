import business from '../config/business'

/* Builds working contact links from the config. Empty values return null so
   components can simply skip that button. */
const { contact } = business

export const phoneLink = contact.phoneHref ? `tel:${contact.phoneHref}` : null

export const whatsappLink = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`
  : null

export const emailLink = contact.email ? `mailto:${contact.email}` : null

export const directionsLink =
  contact.mapsUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${contact.addressLine1}, ${contact.addressLine2}`,
  )}`
