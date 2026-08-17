import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { Logo, SocialChips } from '../ui.jsx'
import { CONTACT } from '../../data/site.js'

const QUICK_LINKS = [
  { label: 'Pods of Wisdom', to: '/' },
  { label: 'Work with us', to: '/work-with-us' },
  { label: 'Revision and assessment', to: '/revision-assessment' },
  { label: 'News and Events', to: '/news-and-events' },
  { label: 'Teachers and Trainers', to: '/teachers-trainers' },
]

const POLICY_LINKS = [
  { label: 'Help & FAQ', to: '/help-desk' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Data Protection', to: '/data-protection' },
  { label: 'Terms of Use and Service', to: '/terms-of-service' },
]

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      {/* Sub footer */}
      <div className="shell grid grid-cols-1 gap-12 pb-14 pt-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-6">
          <Logo light />
          <p className="text-body-sm text-inverse-on-surface/75">
            Lessons, revision and assessment for every level in Kenya, delivered through the TrainRight Digital App and website.
          </p>
          <SocialChips dark />
        </div>

        <nav aria-label="Quick links">
          <h5 className="mb-6 text-label-lg uppercase tracking-widest text-white">Quick Links</h5>
          <ul className="space-y-3.5 text-body-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-inverse-on-surface/75 transition-colors hover:text-primary-fixed-dim">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h5 className="mb-6 text-label-lg uppercase tracking-widest text-white">Help & Policies</h5>
          <ul className="space-y-3.5 text-body-sm">
            {POLICY_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-inverse-on-surface/75 transition-colors hover:text-primary-fixed-dim">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-6 text-label-lg uppercase tracking-widest text-white">Contact Us</h5>
          <ul className="space-y-4 text-body-sm text-inverse-on-surface/75">
            <li className="flex gap-3">
              <Icon name="call" className="text-primary-container" />
              <a href={`tel:+254${CONTACT.phone.slice(1)}`} className="transition-colors hover:text-primary-fixed-dim">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="text-primary-container" />
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-primary-fixed-dim">
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <Link to="/contact-us" className="mt-6 inline-flex items-center gap-2 text-label-lg text-primary-fixed-dim hover:underline">
            Send us a message
            <Icon name="arrow_forward" className="text-base" />
          </Link>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-body-sm text-inverse-on-surface/60 md:flex-row">
          <p>©TrainRight Technologies 2026, All rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
