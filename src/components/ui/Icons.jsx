/* Ícones de linha simples (usam currentColor). Apenas decorativos. */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export const ArrowIcon = () => (
  <svg {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const MailIcon = () => (
  <svg {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const ArrowUpRightIcon = () => (
  <svg {...base}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const HeartIcon = () => (
  <svg {...base}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  </svg>
)

export const PersonIcon = () => (
  <svg {...base}>
    <path d="M12 3c-3 0-5 2.2-5 5.3 0 2.1.6 3.7 1.6 4.7" />
    <path d="M12 3c3 0 5 2.2 5 5.3 0 2.1-.6 3.7-1.6 4.7" />
    <circle cx="12" cy="9.5" r="3.2" />
    <path d="M5 21c.6-3.6 3.4-5.5 7-5.5s6.4 1.9 7 5.5" />
  </svg>
)

export const CalendarIcon = () => (
  <svg {...base}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
    <path d="M16 3v4M8 3v4M3.5 10h17M9 15l2 2 4-4" />
  </svg>
)

export const ClockIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const PinIcon = () => (
  <svg {...base}>
    <path d="M19 10c0 5.2-7 11-7 11s-7-5.8-7-11a7 7 0 1 1 14 0z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const PhoneIcon = () => (
  <svg {...base}>
    <path d="M21 16.4v2.7a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.7-2.8 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3.1 5 1.8 1.8 0 0 1 4.9 3h2.7a1.8 1.8 0 0 1 1.8 1.5c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9L8.4 10a14.4 14.4 0 0 0 5.4 5.4l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.7 1.9z" />
  </svg>
)

export const WhatsappIcon = () => (
  <svg {...base}>
    <path d="M4 20l1.2-3.6A8.2 8.2 0 1 1 8 19.1z" />
    <path d="M9.2 8.6c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.3l.6 1.4c0 .2 0 .3-.1.5l-.4.5c-.1.1-.1.3 0 .4a5.7 5.7 0 0 0 2.6 2.3c.2.1.3 0 .4-.1l.5-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.2.3.4 0 .5-.2 1.1-.7 1.4-.6.4-1.5.5-2.6.1a8.3 8.3 0 0 1-3.9-3.5c-.6-1-.7-2-.2-2.7z" />
  </svg>
)

export const InstagramIcon = () => (
  <svg {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)
