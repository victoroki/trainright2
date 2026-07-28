import Icon from '../components/Icon.jsx'
import { PageHero, SectionHeader } from '../components/ui.jsx'

const VALUES = [
  { icon: 'target', title: 'Accuracy', desc: 'Curriculum-aligned content, checked before release.' },
  { icon: 'speed', title: 'Precision', desc: 'The right lesson, for the right level, at the right time.' },
  { icon: 'handshake', title: 'Integrity', desc: 'Transparent pricing, honest results, protected data.' },
  { icon: 'lightbulb', title: 'Innovation', desc: 'Technology that makes teaching lighter and learning stick.' },
  { icon: 'diversity_1', title: 'Inclusion', desc: 'Every level, every learner, including Kenya Sign Language.' },
]

export default function About() {
  return (
    <>
      <PageHero
        title="Accuracy and precision in every lesson"
        lead="TrainRight Technologies supports the learning process for all levels of learning in Kenya and beyond, from PP1 to Teacher Education and TVET."
        icon="verified"
      />

      {/* Mission / Vision */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl bg-primary p-8 text-on-primary lg:col-span-1">
            <Icon name="flag" className="mb-5 text-4xl" fill />
            <h2 className="font-display text-headline-md text-white">Our Mission</h2>
            <p className="mt-3 text-body-md text-white/90">
              To support the learning process for all levels of learning in Kenya and beyond with accuracy and
              precision, through technology-driven lessons, revision, assessment and teacher support.
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 lg:col-span-1">
            <Icon name="visibility" className="mb-5 text-4xl text-secondary" fill />
            <h2 className="font-display text-headline-md text-on-surface">Our Vision</h2>
            <p className="mt-3 text-body-md text-on-surface-variant">
              To be Africa's most trusted digital learning companion: the platform every learner, teacher and
              institution turns to first.
            </p>
          </div>
          <div className="rounded-xl bg-inverse-surface p-8 lg:col-span-1">
            <Icon name="monitor_heart" className="mb-5 text-4xl text-primary-container" fill />
            <h2 className="font-display text-headline-md text-white">Why TrainRight</h2>
            <p className="mt-3 text-body-md text-inverse-on-surface/85">
              Short, focused content. Auto-marked assessment. Approved teachers and trainers. Secure payments and
              protected data. One account from PP1 to college.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-outline-variant/70 bg-surface-container-low py-16 md:py-20">
        <div className="shell">
          <SectionHeader
            title="The values behind the check mark"
            lead="Every pod, lesson and examination passes through quality control led by our Chief Education Officer and Chief Executive Officer."
          />
          <div className="mt-10 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
            <div className="grid grid-cols-1 divide-y divide-outline-variant/70 md:grid-cols-2 md:divide-x md:divide-y-0">
              {VALUES.map((v) => (
                <div key={v.title} className="flex items-start gap-4 p-5">
                  <Icon name={v.icon} className="mt-0.5 shrink-0 text-2xl text-primary" fill />
                  <div>
                    <h3 className="font-display text-base font-bold text-on-surface">{v.title}</h3>
                    <p className="mt-1 text-body-sm text-on-surface-variant">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
