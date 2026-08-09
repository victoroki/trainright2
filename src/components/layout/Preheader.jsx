import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { SocialIcon } from '../ui.jsx'
import { CONTACT, PREHEADER_LINKS, SOCIALS } from '../../data/site.js'

export default function Preheader() {
  return (
    <section className="bg-inverse-surface text-inverse-on-surface">
      <div className="shell flex items-center justify-between gap-2 py-1.5 text-[11px] sm:text-label-md">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-5">
          <a
            href={`tel:+254${CONTACT.phone.slice(1)}`}
            className="flex shrink-0 items-center gap-1 whitespace-nowrap transition-colors hover:text-primary-fixed-dim"
          >
            <Icon name="call" className="shrink-0 text-[1.1em]" />
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex min-w-0 items-center gap-1 transition-colors hover:text-primary-fixed-dim"
          >
            <Icon name="mail" className="shrink-0 text-[1.1em]" />
            <span className="truncate">{CONTACT.email}</span>
          </a>
        </div>
        <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-4">
          <nav className="hidden items-center gap-4 lg:flex" aria-label="Quick">
            {PREHEADER_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="whitespace-nowrap transition-colors hover:text-primary-fixed-dim">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-1.5 xl:flex" aria-label="Social media">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                aria-label={s.label}
                className="flex h-7 w-7 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-primary-container"
              >
                <SocialIcon platform={s.label} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <Link
            to="/get-started"
            className="whitespace-nowrap rounded bg-primary-container px-3 py-1.5 font-bold text-on-primary-container transition-colors hover:bg-primary sm:px-4"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
