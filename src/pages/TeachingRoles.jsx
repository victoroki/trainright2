import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageHero, SectionHeader } from '../components/ui.jsx'

const ROLES = [
  { role: 'Content Creator — Sciences', location: 'Nairobi / Remote', type: 'Full-time', deadline: '15 Aug 2026', level: 'PP1 – Grade 12 & TVET' },
  { role: 'Educational Consultant', location: 'Mombasa', type: 'Contract', deadline: '31 Aug 2026', level: 'Curriculum design' },
  { role: 'Subject Expert — Mathematics', location: 'Remote', type: 'Part-time', deadline: '22 Aug 2026', level: 'Grade 7 – 12' },
  { role: 'Teacher Partnership Manager', location: 'Kisumu', type: 'Part-time', deadline: '5 Sep 2026', level: 'Schools & colleges' },
  { role: 'Content Creator — Languages & Humanities', location: 'Nairobi / Remote', type: 'Full-time', deadline: '28 Aug 2026', level: 'All levels' },
  { role: 'TVET Trainer', location: 'Nairobi', type: 'Full-time', deadline: '12 Sep 2026', level: 'TVET CDACC Levels 3–6' },
]

const PERKS = [
  { icon: 'devices', title: 'Work from anywhere', desc: 'Commission-based and remote-friendly roles for teachers and trainers.' },
  { icon: 'trending_up', title: 'Grow with us', desc: 'Clear paths from content roles to executive and Chief Officer positions.' },
  { icon: 'payments', title: 'Fair, transparent pay', desc: 'Salaries and commissions paid on time, with payslips in your staff portal.' },
  { icon: 'school', title: 'Real impact', desc: 'Your lessons reach learners across Kenya.' },
]

export default function TeachingRoles() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="See open Teaching Roles"
        lead="We hire educators, trainers and content creators to build lessons, pods and assessments for learners across Kenya."
        icon="work"
      />

      {/* How it works strip */}
      <section className="border-y border-outline-variant/70 bg-surface-container-low py-12 md:py-14">
        <div className="shell">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <div key={p.title} className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed">
                  <Icon name={p.icon} className="text-xl text-on-primary-fixed-variant" fill />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-on-surface">{p.title}</h3>
                  <p className="mt-1 text-body-sm text-on-surface-variant">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell max-w-5xl">
          <SectionHeader
            eyebrow="Open positions"
            title="Roles you can apply for today"
            lead="Shortlisted applicants move to review, then to the Account Creation flow where HR assigns your staff number."
          />

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {ROLES.map((r) => (
              <article
                key={r.role}
                className="card card-hover flex flex-col p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Icon name="co_present" className="text-xl" fill />
                  </span>
                  <span className="rounded-full bg-primary-fixed px-3 py-1 text-label-md font-semibold uppercase tracking-wide text-on-primary-fixed-variant">
                    {r.type}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-headline-sm text-on-surface">{r.role}</h3>
                <p className="mt-1.5 text-label-md font-semibold text-secondary">{r.level}</p>
                <dl className="mt-4 space-y-2 text-body-sm text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <Icon name="location_on" className="text-base text-on-surface-variant" />
                    {r.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="event" className="text-base text-on-surface-variant" />
                    Apply by {r.deadline}
                  </div>
                </dl>
                <div className="mt-6 flex-1" />
                <Link to="/create-account" className="btn-primary w-full">
                  <Icon name="person_add" className="text-base" />
                  Apply for this role
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl bg-inverse-surface p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h3 className="font-display text-headline-md text-white">Don&apos;t see your subject?</h3>
              <p className="mt-2 text-body-sm text-inverse-on-surface/80">
                We are always looking for great teachers. Create your account and we will match you to roles as they
                open.
              </p>
            </div>
            <Link to="/create-account" className="btn-primary shrink-0">
              <Icon name="how_to_reg" className="text-lg" />
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
