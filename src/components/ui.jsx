import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { SOCIALS } from '../data/site.js'
import qrTrainright from '../images/qr-trainright.png'
import logoTrainright from '../images/logo.png'

export function GooglePlayIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="#00d2ff"
        d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z"
      />
      <path
        fill="#00f076"
        d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z"
      />
      <path
        fill="#ff3a44"
        d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
      />
      <path
        fill="#ffbe00"
        d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z"
      />
    </svg>
  )
}

export function Logo({ light = false }) {
  const img = (
    <img
      src={logoTrainright}
      alt="TrainRight Digital"
      className={
        light
          ? 'h-9 w-auto max-w-full object-contain object-left sm:h-10 lg:h-11'
          : 'h-10 w-auto max-w-[46vw] object-contain object-left sm:h-12 sm:max-w-none lg:h-12 xl:h-14'
      }
    />
  )
  return (
    <Link to="/" className="inline-flex items-center" aria-label="TrainRight Technologies home">
      {light ? <span className="inline-flex rounded-lg bg-white px-4 py-2.5">{img}</span> : img}
    </Link>
  )
}

export function SectionHeader({ eyebrow, title, lead, align = 'left', dark = false }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignCls}`}>
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-label-md uppercase tracking-widest ${
            dark ? 'bg-white/10 text-primary-fixed-dim' : 'bg-primary-fixed text-on-primary-fixed-variant'
          }`}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-headline-lg-mobile md:text-headline-lg ${
          dark ? 'text-white' : 'text-on-surface'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 max-w-2xl text-body-md ${dark ? 'text-inverse-on-surface/80' : 'text-on-surface-variant'}`}>
          {lead}
        </p>
      )}
    </div>
  )
}

export function PageHero({ eyebrow, title, lead, icon }) {
  return (
    <section className="relative overflow-hidden bg-inverse-surface">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #eaf1ff 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-secondary" />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div aria-hidden="true" className="absolute -right-10 -top-16 hidden text-white/[0.06] lg:block">
        <Icon name={icon} className="text-[240px]" fill />
      </div>
      <div className="shell relative py-14 md:py-20">
        {eyebrow && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-label-md uppercase tracking-widest text-primary-fixed-dim">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-fixed-dim" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-display text-headline-lg-mobile text-white md:text-display-lg">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-body-lg text-inverse-on-surface/85">{lead}</p>}
      </div>
    </section>
  )
}

export function StoreButtons({ className = '' }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Get the TrainRight Digital App on Google Play"
        className="flex items-center gap-2.5 rounded-lg bg-[#0b1c30] px-4 py-2.5 text-white shadow-lift transition-[transform,background-color] duration-200 ease-out hover:bg-black active:scale-[0.97] sm:gap-3 sm:px-5 sm:py-3"
      >
        <GooglePlayIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="text-left">
          <span className="block text-[10px] uppercase leading-tight opacity-70">Get it on</span>
          <span className="block font-display text-sm font-bold">Google Play</span>
        </span>
      </a>
    </div>
  )
}

export function QrCard({ compact = false, large = false, caption = 'www.trainright.co.ke' }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-outline-variant bg-white ${
        compact ? 'p-3' : 'p-3 sm:p-4'
      } shadow-sm`}
    >
      <img
        src={qrTrainright}
        alt="QR code linking to www.trainright.co.ke"
        className={`shrink-0 rounded border border-outline-variant ${
          large ? 'h-40 w-40 sm:h-48 sm:w-48' : compact ? 'h-16 w-16' : 'h-16 w-16 sm:h-20 sm:w-20'
        }`}
      />
      <div>
        <p className={`${large ? 'text-body-md font-semibold' : 'text-label-lg'} text-on-surface`}>
          Scan to Download
        </p>
        <p className={`mt-1 ${large ? 'text-body-sm' : 'text-[11px]'} text-on-surface-variant`}>{caption}</p>
      </div>
    </div>
  )
}

// High-level advert slot. Adverts render by priority and appear across the site.
export function AdvertBanner({ title, lead, cta = 'Learn more', to = '/work-with-us', icon = 'campaign' }) {
  return (
    <aside className="relative overflow-hidden rounded-xl bg-primary text-on-primary shadow-lift">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <div aria-hidden="true" className="absolute -bottom-10 -right-6 text-white/15">
        <Icon name={icon} className="text-[160px]" fill />
      </div>
      <div className="relative flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-10">
        <div className="max-w-xl">
          <h3 className="font-display text-headline-md text-white">{title}</h3>
          <p className="mt-2 text-body-sm text-white/85">{lead}</p>
        </div>
        <Link
          to={to}
          className="inline-flex shrink-0 items-center gap-2 rounded bg-white px-5 py-2.5 text-label-lg text-primary shadow-lift transition-[background-color,transform] duration-200 ease-out hover:bg-primary-fixed active:scale-[0.97]"
        >
          {cta}
          <Icon name="arrow_forward" className="text-lg" />
        </Link>
      </div>
    </aside>
  )
}

export function SocialIcon({ platform, className = 'h-4 w-4' }) {
  const paths = {
    YouTube: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z',
    Facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    'X (Twitter)': 'M18.24 2.25h3.31l-7.23 8.26L22.83 21.75h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.17 2.25h6.83l4.71 6.23 5.53-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z',
    Instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.35-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
    WhatsApp: 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 9.88 9.9c0 5.44-4.44 9.87-9.89 9.87m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41z',
    LinkedIn: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z',
    TikTok: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z',
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d={paths[platform] || ''} />
    </svg>
  )
}

export function SocialChips({ dark = false, size = 'md' }) {
  const box = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'
  return (
    <div className="flex flex-wrap gap-2.5">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          title={s.label}
          aria-label={s.label}
          className={`flex ${box} items-center justify-center rounded transition-colors ${
            dark
              ? 'bg-white/10 text-white hover:bg-primary hover:text-white'
              : 'bg-surface-container text-on-surface-variant hover:bg-primary hover:text-white'
          }`}
        >
          <SocialIcon platform={s.label} className={size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
        </a>
      ))}
    </div>
  )
}
