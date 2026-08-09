import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { AdvertBanner, QrCard, SectionHeader, StoreButtons } from '../components/ui.jsx'
import { LEVEL_GROUPS, POD_CATEGORIES, POD_VIDEOS, SERVICES } from '../data/site.js'
import phoneBg from '../images/phone-bg.svg'

function PodCard({ pod }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest transition-shadow hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
      <div className="relative flex aspect-video items-center justify-center bg-inverse-surface">
        <Icon name="smart_display" className="absolute text-6xl text-white/10" fill />
        <span className="absolute left-3 top-3 rounded-full bg-secondary/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          {pod.subject}
        </span>
        <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">
          {pod.duration}
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110">
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
  return (
    <>
      {/* Hero: app download, QR code and high-level advert widgets */}
      <section className="relative overflow-hidden bg-surface-container-low py-16 md:py-24">
        <div className="shell grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10 order-2 lg:order-1">
            <h1 className="mb-6 font-display text-headline-lg-mobile text-on-surface md:text-display-lg">
              The TrainRight Digital App
            </h1>
            <p className="mb-10 max-w-lg text-body-lg text-on-surface-variant">
              Lessons, revision and assessments for every level of learning in Kenya, from PP1 to teacher education.
              Available on Android now.
            </p>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="order-2 sm:order-1">
                <StoreButtons />
              </div>
              <div className="order-1 sm:order-2">
                <QrCard caption="TrainRight Digital App" />
              </div>
            </div>
            <p className="mt-8 flex items-center gap-2 text-body-sm text-on-surface-variant">
              <Icon name="info" className="shrink-0 text-lg text-secondary" />
              Pods of Wisdom are free on the website. The full feed, lessons and assessments live in the app.
            </p>
          </div>

          <div className="relative order-1 flex items-center justify-center lg:order-2 lg:h-[620px]">
            {/* Soft blue disc behind the slanted mockup */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-[55%] -translate-y-1/2 rounded-full bg-surface-container-highest sm:h-[26rem] sm:w-[26rem]"
            />
            {/* Dotted accent, right side */}
            <div
              aria-hidden="true"
              className="absolute right-2 top-12 h-24 w-24 sm:right-4 sm:h-32 sm:w-32"
              style={{
                backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #8fa7fe 1.5px, transparent 0)',
                backgroundSize: '12px 12px',
              }}
            />
            <img
              src={phoneBg}
              alt="TrainRight Digital App registration: select your level, set a nickname and a 4-digit PIN"
              className="relative h-[300px] w-auto sm:h-[420px] md:h-[500px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* Pods of Wisdom categories */}
      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              title="Pods of Wisdom"
              lead="Short videos by our teachers, organized by subject. Some pods are free on the website. Each pod runs 10 seconds to 5 minutes."
            />
            <Link to="/get-started" className="inline-flex shrink-0 items-center gap-2 text-label-lg text-secondary hover:underline">
              View All Categories
              <Icon name="arrow_forward" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POD_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container p-7 transition-shadow hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)]"
              >
                <div className="relative z-10 flex flex-1 flex-col">
                  <Icon name={cat.icon} className="mb-4 text-4xl text-primary" fill />
                  <h3 className="mb-2 font-display text-headline-sm text-on-surface">{cat.title}</h3>
                  <p className="mb-6 text-body-sm text-on-surface-variant">{cat.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {cat.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute -bottom-8 -right-8 text-on-surface-variant opacity-5 transition-transform group-hover:scale-110"
                >
                  <Icon name={cat.bgIcon} className="text-[160px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free pods feed */}
      <section className="border-y border-outline-variant/70 bg-surface-container-low py-16 md:py-20">
        <div className="shell">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              title="Trending Pods"
              lead="Every pod is between 10 seconds and 5 minutes. Teachers and trainers contribute a free pod for every paid lesson they upload."
            />
            <Link to="/get-started" className="btn-secondary shrink-0">
              <Icon name="phone_android" />
              Open in the App
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POD_VIDEOS.slice(0, 6).map((pod) => (
              <PodCard key={pod.title} pod={pod} />
            ))}
          </div>
          <div className="mt-10">
            <AdvertBanner
              title="Put your education brand in front of 50,000+ learners"
              lead="Priority adverts appear here, in the app feed and across Pods of Wisdom. Book a slot with our commercial team."
              cta="Advertise with us"
              to="/work-with-us"
            />
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
                className="flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-5 transition-colors hover:border-primary"
              >
                <div className="flex items-center gap-3">
                  <Icon name={s.icon} className="text-xl text-primary" />
                  <h4 className="font-display text-base font-bold text-on-surface">{s.title}</h4>
                </div>
                <p className="mt-2 flex-1 pl-9 text-body-sm leading-relaxed text-on-surface-variant">{s.desc}</p>
              </Link>
            ))}
            <Link
              to="/services"
              className="flex h-full flex-col justify-between rounded-xl bg-primary p-6 text-on-primary transition-colors hover:bg-on-primary-fixed-variant"
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

      {/* Levels band */}
      <section className="bg-inverse-surface py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <SectionHeader
                dark
                title="From PP1 to Teacher Education"
                lead="One account, your own subjects, auto-marked quizzes and certificates as you complete each level."
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
          <div className="relative overflow-hidden rounded-xl bg-primary">
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
