import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { QrCard, AdvertBanner, SectionHeader, StoreButtons } from '../components/ui.jsx'
import { LEVEL_GROUPS, POD_VIDEOS, SERVICES } from '../data/site.js'
import heroImage from '../images/hero.png'

function PodCard({ pod }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lift">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-inverse-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #eaf1ff 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
        <Icon name="smart_display" className="absolute text-6xl text-white/10" fill />
        <span className="absolute left-3 top-3 rounded-full bg-secondary/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          {pod.subject}
        </span>
        <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">
          {pod.duration}
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lift transition-transform duration-200 ease-out group-hover:scale-110">
          <Icon name="play_arrow" className="text-3xl" fill />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-[15px] font-bold leading-snug text-on-surface">{pod.title}</h3>
        <p className="mt-2 flex items-center justify-between text-label-md text-on-surface-variant">
          <span>
            {pod.level} · {pod.teacher}
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="visibility" className="text-sm" />
            {pod.views}
          </span>
        </p>
      </div>
    </article>
  )
}

export default function Home() {
  const levels = LEVEL_GROUPS.flatMap((g) => g.levels)

  // Limited preview: first 4 pods
  const previewPods = POD_VIDEOS.slice(0, 4)

  return (
    <>
      {/* Hero: Education landing view */}
      <section className="relative overflow-hidden bg-inverse-surface py-20 md:min-h-[88vh] md:py-0">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/85 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-secondary" />
        <div aria-hidden="true" className="absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
        <div className="shell relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="font-display text-headline-lg-mobile text-white md:text-display-lg">
              Free video lessons, revision and assessment for every level in Kenya.
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-inverse-on-surface/85">
              Free video lessons, revision tools, Assessment tool and teacher resources all in one platform built for
              Kenya&apos;s learners, educators, and institutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/pods" className="btn-primary">
                <Icon name="smart_display" className="text-lg" />
                Explore Pods of Wisdom
              </Link>
              <Link
                to="/revision-assessment"
                className="inline-flex min-h-11 items-center gap-2 rounded border border-white/25 px-5 py-2.5 text-label-lg text-white transition-[background-color,border-color,transform] duration-200 ease-out hover:bg-white/10 hover:border-white/40 active:scale-[0.97]"
              >
                <Icon name="fact_check" className="text-lg" />
                Start Revision
              </Link>
            </div>
          </div>

          {/* QR code guide */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lift sm:p-8">
              <span className="inline-flex items-center gap-2 text-label-lg uppercase tracking-widest text-primary-fixed-dim">
                <Icon name="cloud_download" className="text-lg" />
                Download the App
              </span>
              <h3 className="mt-3 font-display text-headline-md text-white">TrainRight Digital App</h3>
              <p className="mt-2 text-body-sm text-inverse-on-surface/70">
                Learn anywhere, anytime. Access pods, assessments and your profile on the go.
              </p>
              <div className="mt-6 flex justify-center">
                <QrCard large caption="Scan to download the TrainRight Digital App" />
              </div>
              <div className="mt-5 flex justify-center">
                <StoreButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pods preview — limited selection on homepage */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              title="Pods of Wisdom"
              lead="Here are the free lessons."
            />
            <Link to="/pods" className="btn-secondary shrink-0">
              <Icon name="smart_display" />
              Explore all Pods
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewPods.map((pod) => (
              <PodCard key={pod.title} pod={pod} />
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <div className="mb-14 text-center">
            <SectionHeader
              align="center"
              title="Our services"
              lead="Lessons and assessment, consultancy, TVET training, research, mentorship and more."
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 7).map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="card card-hover flex h-full flex-col p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container">
                    <Icon name={s.icon} className="text-primary" />
                  </span>
                  <h4 className="font-display text-base font-bold text-on-surface">{s.title}</h4>
                </div>
                <p className="mt-3 flex-1 pl-13 text-body-sm leading-relaxed text-on-surface-variant">{s.desc}</p>
              </Link>
            ))}
            <Link
              to="/services"
              className="flex h-full flex-col justify-between rounded-xl bg-primary p-6 text-on-primary shadow-lift transition-[background-color,transform] duration-200 ease-out hover:bg-on-primary-fixed-variant active:scale-[0.98]"
            >
              <h4 className="font-display text-headline-sm text-white">Explore all 11 services</h4>
              <span className="mt-6 inline-flex items-center gap-2 text-label-lg">
                Our Services
                <Icon name="arrow_forward" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Advertise banner */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <AdvertBanner
            title="Put your education brand in front of 50,000+ learners"
            lead="Priority adverts appear here, in the app feed and across Pods of Wisdom. Book a slot with our commercial team."
            cta="Advertise with us"
            to="/get-started?role=schools"
          />
        </div>
      </section>

      {/* Levels band */}
      <section className="bg-inverse-surface py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <SectionHeader
                dark
                title="From PP1 to Teacher Education"
                lead="Your own subjects, auto-marked quizzes and certificates as you complete each level."
              />
              <Link to="/get-started" className="btn-primary mt-8">
                <Icon name="person_add" />
                Create your account
              </Link>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2.5">
              {levels.map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-label-md font-semibold uppercase tracking-wide text-inverse-on-surface"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App download CTA */}
      <section className="bg-surface py-16 md:py-24">
        <div className="shell">
          <div className="relative overflow-hidden rounded-xl bg-primary shadow-lift">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-10 p-8 md:p-14 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-headline-lg-mobile text-white md:text-headline-lg">
                  Learn anywhere with the TrainRight Digital App
                </h2>
                <ul className="mt-6 space-y-3 text-body-md text-white/90">
                  {[
                    'Pods of Wisdom, personalized to your subjects',
                    'Lessons with auto-marked quizzes and instant results',
                    'Revision schedules, assessments and certificates in PDF',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icon name="check_circle" className="mt-0.5 text-xl text-white" fill />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-6 lg:items-end">
                <StoreButtons />
                <QrCard compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
