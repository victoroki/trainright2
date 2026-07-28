import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { SocialIcon } from '../ui.jsx'
import { CONTACT, PREHEADER_LINKS, SOCIALS } from '../../data/site.js'

export default function Preheader() {
  return (
    <section className="hidden bg-inverse-surface py-2 text-inverse-on-surface md:block">
      <div className="shell flex items-center justify-between text-label-md">
        <div className="flex items-center gap-6">
          <a href={`tel:+254${CONTACT.phone.slice(1)}`} className="flex items-center gap-2 transition-colors hover:text-primary-fixed-dim">
            <Icon name="call" className="text-sm" />
            <span>Call Us: {CONTACT.phone}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition-colors hover:text-primary-fixed-dim">
            <Icon name="mail" className="text-sm" />
            <span>{CONTACT.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex gap-5" aria-label="Quick">
            {PREHEADER_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="transition-colors hover:text-primary-fixed-dim">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-1.5" aria-label="Social media">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                aria-label={s.label}
                className="flex h-6 w-6 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-primary-container"
              >
                <SocialIcon platform={s.label} className="h-3 w-3" />
              </a>
            ))}
          </div>
          <Link
            to="/get-started"
            className="rounded bg-primary-container px-4 py-1.5 font-bold text-on-primary-container transition-colors hover:bg-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
