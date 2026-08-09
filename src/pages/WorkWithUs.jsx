import Icon from '../components/Icon.jsx'
import { AdvertBanner, PageHero } from '../components/ui.jsx'

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
        title="Company adverts and partnerships"
        lead="We work with teachers, trainers, institutions and advertisers to improve learning across Kenya."
        icon="work"
      />

      {/* Perks */}
      <section className="border-y border-outline-variant/70 bg-surface-container-low py-16 md:py-20">
        <div className="shell">
          <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
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
