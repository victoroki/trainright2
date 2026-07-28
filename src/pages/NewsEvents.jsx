import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageHero, SectionHeader } from '../components/ui.jsx'
import { NEWS } from '../data/site.js'

function dateParts(dateStr) {
  const [day, month, year] = dateStr.split(' ')
  return { day, month, year }
}

export default function NewsEvents() {
  const [featured, ...rest] = NEWS
  const f = dateParts(featured.date)
  return (
    <>
      <PageHero
        eyebrow="News and Events"
        title="What is happening at TrainRight"
        lead="All upcoming events, webinars, conferences and company news appear here."
        icon="event"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          {/* Featured */}
          <article className="relative overflow-hidden rounded-xl bg-inverse-surface">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #eaf1ff 1px, transparent 0)',
                backgroundSize: '26px 26px',
              }}
            />
            <div className="relative grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-xl bg-primary text-white">
                <span className="font-display text-3xl font-extrabold leading-none">{f.day}</span>
                <span className="mt-1 text-label-md uppercase tracking-widest">{f.month}</span>
              </div>
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary-container px-3 py-1 text-label-md font-semibold uppercase tracking-wider text-white">
                  {featured.tag}
                </span>
                <h2 className="font-display text-headline-md text-white">{featured.title}</h2>
                <p className="mt-2 max-w-2xl text-body-sm text-inverse-on-surface/80">{featured.excerpt}</p>
              </div>
              <Link to="/get-started" className="btn-primary shrink-0">
                Register to attend
              </Link>
            </div>
          </article>

          {/* All news */}
          <div className="mt-16">
            <SectionHeader eyebrow="More updates" title="News and upcoming events" />
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((n) => {
                const d = dateParts(n.date)
                return (
                  <article
                    key={n.title}
                    className="flex gap-5 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-shadow hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-surface-container">
                      <span className="font-display text-xl font-extrabold leading-none text-primary">{d.day}</span>
                      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant">
                        {d.month}
                      </span>
                    </div>
                    <div>
                      <span className="text-label-md font-semibold uppercase tracking-wider text-secondary">
                        {n.tag}
                      </span>
                      <h3 className="mt-1 font-display text-base font-bold leading-snug text-on-surface">{n.title}</h3>
                      <p className="mt-2 text-body-sm text-on-surface-variant">{n.excerpt}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          {/* Subscribe band */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-xl border border-outline-variant bg-surface-container-low p-8 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <Icon name="notifications_active" className="text-3xl text-primary" fill />
              <div>
                <h3 className="font-display text-headline-sm text-on-surface">Never miss an event</h3>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  Registered learners get event alerts by SMS and email. Create a free account to stay in the loop.
                </p>
              </div>
            </div>
            <Link to="/get-started" className="btn-primary shrink-0">
              <Icon name="person_add" />
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
