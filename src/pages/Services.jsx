import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { AdvertBanner, PageHero } from '../components/ui.jsx'
import { SERVICES } from '../data/site.js'

export default function Services() {
  return (
    <>
      <PageHero
        title="All our services in one place"
        lead="We support learning for all levels in Kenya. Every service below includes a guide on how to access it."
        icon="auto_stories"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-1 gap-5 border-b border-outline-variant/70 py-8 first:pt-0 last:border-b-0 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-start gap-4 md:col-span-1 md:flex-col md:gap-2">
                  <span className="font-display text-headline-md font-bold text-primary/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container">
                      <Icon name={s.icon} className="text-primary" />
                    </span>
                    <h2 className="font-display text-headline-sm text-on-surface">{s.title}</h2>
                  </div>
                  <p className="max-w-xl text-body-md text-on-surface-variant">{s.desc}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="mb-1.5 text-label-md font-semibold uppercase tracking-widest text-secondary">
                    How to access
                  </p>
                  <p className="text-body-sm text-on-surface">{s.access}</p>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-label-lg text-primary hover:underline"
                    >
                      Open service
                      <Icon name="open_in_new" className="text-base" />
                    </a>
                  ) : (
                    <Link
                      to={s.to}
                      className="mt-3 inline-flex items-center gap-1.5 text-label-lg text-primary hover:underline"
                    >
                      Open service
                      <Icon name="arrow_forward" className="text-base" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <AdvertBanner
              title="Need a custom package for your institution?"
              lead="We bundle lessons, assessment, consultancy and material supply for schools and colleges at institutional rates."
              cta="Talk to us"
              to="/contact-us"
              icon="account_balance"
            />
          </div>
        </div>
      </section>
    </>
  )
}
