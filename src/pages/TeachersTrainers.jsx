import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageHero, SectionHeader } from '../components/ui.jsx'
import { TEACHER_MATERIALS } from '../data/site.js'

const WORKFLOW = [
  {
    icon: 'smart_display',
    title: 'Contribute a free pod',
    desc: 'For every complete paid lesson you upload, you add one free Pod of Wisdom: 10 seconds to 5 minutes.',
  },
  {
    icon: 'upload_file',
    title: 'Upload lessons and infographics',
    desc: 'Upload videos or infographics per assigned level, subject and lesson number, using our templates.',
  },
  {
    icon: 'quiz',
    title: 'Set quizzes and CATs',
    desc: 'Set the 5-question lesson quizzes, monthly CATs and end-session examinations. The system auto-marks.',
  },
  {
    icon: 'monitoring',
    title: 'Track your students',
    desc: 'See every learner using your content, their quiz results and your commission statements.',
  },
]

export default function TeachersTrainers() {
  return (
    <>
      <PageHero
        title="Teaching materials and a path to earn"
        lead="A guide for primary, junior and senior school teachers and college trainers. Access materials, upload lessons, earn commissions."
        icon="co_present"
      />

      {/* Materials */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <SectionHeader
            title="Materials for your level"
            lead="Government-approved eBooks and professional documents, organized by the levels and subjects assigned to you."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {TEACHER_MATERIALS.map((m) => (
              <div key={m.audience} className="flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container">
                    <Icon name={m.icon} className="text-primary" />
                  </span>
                  <h3 className="font-display text-headline-sm text-on-surface">{m.audience}</h3>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-body-md text-on-surface">
                      <Icon name="check_circle" className="text-xl text-primary" fill />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How trainers earn */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <SectionHeader
            title="How creating content works"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW.map((w) => (
              <div key={w.title} className="flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-colors hover:border-primary">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container">
                  <Icon name={w.icon} className="text-primary" />
                </span>
                <h3 className="mb-2 font-display text-base font-bold text-on-surface">{w.title}</h3>
                <p className="mt-auto text-body-sm text-on-surface-variant">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl bg-inverse-surface p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h3 className="font-display text-headline-md text-white">Ready to teach on TrainRight?</h3>
              <p className="mt-2 text-body-sm text-inverse-on-surface/80">
                Sign in to the trainer portal, or apply to join our teachers and college trainers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started?role=trainer" className="btn-primary">
                <Icon name="login" />
                Trainer sign in
              </Link>
              <Link
                to="/work-with-us"
                className="inline-flex items-center gap-2 rounded border border-white/30 px-5 py-2.5 text-label-lg text-white transition-colors hover:bg-white/10"
              >
                <Icon name="work" />
                Apply to teach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
