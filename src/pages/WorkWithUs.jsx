import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageHero } from '../components/ui.jsx'
import { AdvertEnquiryInline, AdvertEnquiryModal } from '../components/AdvertEnquiry.jsx'
import { CONTACT } from '../data/site.js'

const PERKS = [
  { icon: 'devices', title: 'Remote-friendly roles', desc: 'Commission-based teachers and trainers work from anywhere.' },
  { icon: 'trending_up', title: 'Growth', desc: 'Clear paths from executive roles to Chief Officer positions.' },
  { icon: 'school', title: 'Purpose', desc: 'Your work directly improves learning across Kenya.' },
  { icon: 'payments', title: 'Fair pay', desc: 'Salaries and commissions paid transparently, with payslips in your staff portal.' },
]

export default function WorkWithUs() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <>
      <PageHero
        title="Company adverts and partnerships"
        lead="We work with teachers, trainers, institutions and advertisers to improve learning across Kenya."
        icon="work"
      />

      {/* Two leads */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* For Teachers and Trainers */}
            <div className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-7 md:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed">
                <Icon name="co_present" className="text-2xl text-on-primary-fixed-variant" fill />
              </span>
              <h2 className="mt-5 font-display text-headline-md text-on-surface">For Teachers and Trainers</h2>
              <p className="mt-3 flex-1 text-body-md text-on-surface-variant">
                Teach on TrainRight, share Pods of Wisdom and reach learners across Kenya. Uploaded content is
                reviewed and approved before release.
              </p>
              <Link to="/get-started?role=trainer" className="btn-primary mt-7 self-start">
                <Icon name="work" className="text-base" />
                See open Teaching Roles
              </Link>
            </div>

            {/* For Institutions */}
            <div className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-7 md:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-fixed">
                <Icon name="account_balance" className="text-2xl text-on-secondary-fixed-variant" fill />
              </span>
              <h2 className="mt-5 font-display text-headline-md text-on-surface">For Institutions</h2>
              <p className="mt-3 flex-1 text-body-md text-on-surface-variant">
                Advertise your school, college or education brand to learners, teachers and institutions. Adverts
                are posted here and promoted across Pods of Wisdom and the app.
              </p>
              <button type="button" onClick={() => setEnquiryOpen(true)} className="btn-primary mt-7 self-start">
                <Icon name="campaign" className="text-base" />
                Place an advert
              </button>
            </div>
          </div>
        </div>
      </section>

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

      {/* Schools and Colleges */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell max-w-3xl">
          <div className="mb-8">
            <h2 className="font-display text-headline-md text-on-surface">Schools and Colleges</h2>
            <p className="mt-3 max-w-2xl text-body-md text-on-surface-variant">
              Create an advertising account to promote your school, college or education brand to learners, teachers
              and institutions on TrainRight. Fill in the form below and upload your advert for review.
            </p>
          </div>
          <AdvertEnquiryInline />
          <div className="mt-8 flex flex-col items-start gap-3 rounded-xl border border-outline-variant bg-surface-container-low p-5">
            <p className="text-body-sm text-on-surface-variant">
              Already have an advertising account? Sign in to manage your adverts.
            </p>
            <a
              href={CONTACT.learnerPortal}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Icon name="login" className="text-base" />
              Sign in to your account
            </a>
          </div>
        </div>
      </section>

      <AdvertEnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  )
}
