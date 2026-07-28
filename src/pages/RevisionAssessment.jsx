import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageHero, SectionHeader } from '../components/ui.jsx'

const STEPS = [
  {
    icon: 'person_add',
    title: 'Create your account',
    desc: 'Register with your nickname, learning level and subjects. Your account number arrives by SMS.',
  },
  {
    icon: 'format_list_bulleted',
    title: 'Pick free or paid',
    desc: 'Choose from the free and paid revisions and assessments listed for your level and subjects.',
  },
  {
    icon: 'fact_check',
    title: 'Learn and attempt',
    desc: 'Attend recorded or live revision classes, then sit the MCQ assessments from your account.',
  },
  {
    icon: 'workspace_premium',
    title: 'Get results instantly',
    desc: 'Assessments are auto-marked. Results display immediately and are stored in My Account.',
  },
]

const FEATURES = [
  { icon: 'quiz', title: 'Auto-marked MCQ quizzes', desc: 'Every lesson ends with a 5-question quiz, marked instantly by the system.' },
  { icon: 'live_tv', title: 'Live revision classes', desc: 'Delivered through Zoom, Google Meet, Webex or BigBlueButton, whichever is most convenient.' },
  { icon: 'event', title: 'Scheduled assessments', desc: 'Time and date of every assessment appear in your account before you sit it.' },
  { icon: 'history', title: 'Resume where you stopped', desc: 'The system remembers the last point you accessed in every lesson.' },
  { icon: 'picture_as_pdf', title: 'Records in PDF', desc: 'Progress records, account statements and certificates, all downloadable.' },
  { icon: 'notifications_active', title: 'Expiry reminders', desc: 'Subscription end is flagged 2 days and 1 day before, so you never lose access unexpectedly.' },
]

const SCHEDULE = [
  { subject: 'Mathematics', item: 'Live Revision: Quadratic Equations', level: 'Form 4', date: 'Sat 01 Aug 2026', time: '10:00 AM', access: 'Free' },
  { subject: 'Chemistry', item: 'MCQ Assessment: The Mole Concept', level: 'Form 4', date: 'Sun 02 Aug 2026', time: '8:00 AM', access: 'Paid' },
  { subject: 'Integrated Science', item: 'Live Revision: Cells', level: 'Grade 8', date: 'Wed 05 Aug 2026', time: '4:00 PM', access: 'Paid' },
  { subject: 'English', item: 'MCQ Assessment: Comprehension', level: 'Grade 10', date: 'Fri 07 Aug 2026', time: '9:00 AM', access: 'Free' },
  { subject: 'Kiswahili', item: 'Live Revision: Insha', level: 'Grade 12', date: 'Sat 08 Aug 2026', time: '11:00 AM', access: 'Paid' },
]

export default function RevisionAssessment() {
  return (
    <>
      <PageHero
        title="Free and paid revision, marked instantly"
        lead="This is your guide to all available free and paid revisions and assessments. When you are ready, sign in to your account to attempt assessments and attend revision classes."
        icon="fact_check"
      />

      {/* Steps */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <SectionHeader
            title="From sign-up to results in four steps"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
                <span className="absolute right-5 top-5 font-display text-headline-md font-bold text-primary/15">
                  {i + 1}
                </span>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container">
                  <Icon name={s.icon} className="text-primary" />
                </span>
                <h3 className="mb-2 font-display text-base font-bold text-on-surface">{s.title}</h3>
                <p className="mt-auto text-body-sm text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/get-started" className="btn-primary">
              <Icon name="login" />
              Sign in to attempt
            </Link>
            <Link to="/get-started" className="btn-secondary">
              Create a free account
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="border-y border-outline-variant/70 bg-surface-container-low py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-2xl text-body-md text-on-surface-variant">
              A sample of the schedule learners see in their accounts, based on the subjects selected at registration.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-xl border border-outline-variant bg-surface-container-lowest">
            <table className="w-full min-w-[760px] text-left text-body-sm">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container text-label-md uppercase tracking-wider text-on-surface-variant">
                  <th className="px-5 py-4 font-semibold">Subject</th>
                  <th className="px-5 py-4 font-semibold">Session</th>
                  <th className="px-5 py-4 font-semibold">Level</th>
                  <th className="px-5 py-4 font-semibold">Date</th>
                  <th className="px-5 py-4 font-semibold">Time</th>
                  <th className="px-5 py-4 font-semibold">Access</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((r) => (
                  <tr key={r.item} className="border-b border-outline-variant/60 last:border-b-0">
                    <td className="px-5 py-4 font-semibold text-on-surface">{r.subject}</td>
                    <td className="px-5 py-4 text-on-surface">{r.item}</td>
                    <td className="px-5 py-4 text-on-surface-variant">{r.level}</td>
                    <td className="px-5 py-4 text-on-surface-variant">{r.date}</td>
                    <td className="px-5 py-4 text-on-surface-variant">{r.time}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-label-md font-semibold ${
                          r.access === 'Free'
                            ? 'bg-secondary-fixed text-on-secondary-fixed-variant'
                            : 'bg-primary-fixed text-on-primary-fixed-variant'
                        }`}
                      >
                        {r.access}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 flex items-center gap-2 text-body-sm text-on-surface-variant">
            <Icon name="info" className="text-lg text-secondary" />
            Payments are made via MPESA pay bill or bank card, and confirmed by SMS from TRAINRIGHT.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <SectionHeader
            title="Built for serious revision"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex h-full gap-5 rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-container">
                  <Icon name={f.icon} className="text-primary" />
                </span>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-base font-bold text-on-surface">{f.title}</h3>
                  <p className="mt-auto text-body-sm text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
