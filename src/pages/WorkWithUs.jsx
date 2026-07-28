import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { AdvertBanner, PageHero, SectionHeader } from '../components/ui.jsx'
import { CONTACT, JOBS } from '../data/site.js'

const PERKS = [
  { icon: 'devices', title: 'Remote-friendly roles', desc: 'Commission-based teachers and trainers work from anywhere.' },
  { icon: 'trending_up', title: 'Growth', desc: 'Clear paths from executive roles to Chief Officer positions.' },
  { icon: 'school', title: 'Purpose', desc: 'Your work directly improves learning across Kenya and beyond.' },
  { icon: 'payments', title: 'Fair pay', desc: 'Salaries and commissions paid transparently, with payslips in your staff portal.' },
]

export default function WorkWithUs() {
  return (
    <>
      <PageHero
        eyebrow="Work with Us"
        title="Vacancies and company adverts"
        lead="All open roles, from teachers to software developers, are posted here. Full-time and commission-based positions available."
        icon="work"
      />

      {/* Vacancies */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <SectionHeader
            eyebrow="Open positions"
            title="Current vacancies"
            lead="To apply, email your CV and the role title to our HR team. Shortlisted candidates receive an SMS from TRAINRIGHT."
          />
          <div className="mt-10 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
            {JOBS.map((j) => (
              <div
                key={j.title}
                className="grid grid-cols-1 items-center gap-4 border-b border-outline-variant/70 p-6 last:border-b-0 md:grid-cols-12"
              >
                <div className="md:col-span-5">
                  <h3 className="font-display text-base font-bold text-on-surface">{j.title}</h3>
                  <p className="mt-1 text-body-sm text-on-surface-variant">{j.dept}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:col-span-4">
                  <span className="chip">
                    <Icon name="schedule" className="text-sm" />
                    {j.type}
                  </span>
                  <span className="chip">
                    <Icon name="location_on" className="text-sm" />
                    {j.location}
                  </span>
                  <span className="chip">
                    <Icon name="event" className="text-sm" />
                    Closes {j.closing}
                  </span>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                    className="btn-secondary !px-4 !py-2"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-body-sm text-on-surface-variant">
            <Icon name="info" className="text-lg text-secondary" />
            New staff receive a staff number (for example 00012021), sign their terms of employment and activate their
            account via an SMS link.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="border-y border-outline-variant/70 bg-surface-container-low py-16 md:py-20">
        <div className="shell">
          <SectionHeader eyebrow="Why TrainRight" title="What you get" />
          <div className="mt-10 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
            <div className="grid grid-cols-1 divide-y divide-outline-variant/70 md:grid-cols-2 md:divide-x md:divide-y-0">
              {PERKS.map((p) => (
                <div key={p.title} className="flex items-start gap-4 p-5">
                  <Icon name={p.icon} className="mt-0.5 shrink-0 text-2xl text-primary" fill />
                  <div>
                    <h3 className="font-display text-base font-bold text-on-surface">{p.title}</h3>
                    <p className="mt-1 text-body-sm text-on-surface-variant">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adverts */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <AdvertBanner
            title="Advertise your company with TrainRight"
            lead="Company adverts, tenders and partnership notices are posted here and promoted across Pods of Wisdom and the app. Reach learners, teachers and institutions directly."
            cta="Place an advert"
            to="/contact-us"
          />
        </div>
      </section>
    </>
  )
}
