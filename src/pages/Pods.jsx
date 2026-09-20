import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { POD_CATEGORIES, POD_VIDEOS } from '../data/site.js'

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

function PodAdCard() {
  return (
    <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-primary p-5 shadow-lift">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative">
        <h4 className="font-display text-base font-bold leading-snug text-white">
          Put your education brand in front of 50,000+ learners
        </h4>
        <p className="mt-2 text-body-sm text-white/85">Let&apos;s reach more learners together.</p>
      </div>
      <Link
        to="/get-started?role=schools"
        className="relative mt-4 inline-flex items-center gap-1.5 text-label-lg font-semibold text-white underline-offset-4 transition-colors hover:text-primary-fixed-dim hover:underline"
      >
        Advertise with us
        <Icon name="arrow_forward" className="text-base" />
      </Link>
    </article>
  )
}

const viewCount = (v) => {
  const n = Number(String(v).replace(/[^\d]/g, ''))
  return String(v).includes('k') ? n * 1000 : n
}

const MOST_VIEWED_SUBJECT = (() => {
  const totals = {}
  POD_VIDEOS.forEach((p) => {
    totals[p.subject] = (totals[p.subject] || 0) + viewCount(p.views)
  })
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0] || null
})()

const POD_FILTERS = ['All', ...POD_CATEGORIES.map((c) => c.title)]

function withAds(items, adCount, biasMatch) {
  const slots = items.length + adCount
  const positions = new Set()
  let guard = 0
  while (positions.size < adCount && guard < 100) {
    guard += 1
    positions.add(1 + Math.floor(Math.random() * (slots - 1)))
  }
  const out = []
  let idx = 0
  for (let i = 0; i < slots; i += 1) {
    if (positions.has(i)) out.push({ type: 'ad', key: `ad-${i}` })
    else {
      const item = items[idx]
      idx += 1
      out.push({ type: 'item', key: item.title, item })
    }
  }
  const biasIdx = out.findIndex((x) => x.type === 'item' && biasMatch?.(x.item))
  if (biasIdx !== -1 && out[biasIdx + 1]?.type !== 'ad') {
    out.splice(biasIdx + 1, 0, { type: 'ad', key: 'ad-bias' })
  }
  return out
}

export default function Pods() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')

  const filteredPods = useMemo(() => {
    const q = query.trim().toLowerCase()
    return POD_VIDEOS.filter((p) => {
      if (filter !== 'All' && p.subject !== filter) return false
      if (!q) return true
      return [p.title, p.teacher, p.level, p.subject].some((v) => String(v).toLowerCase().includes(q))
    })
  }, [filter, query])

  const podItems = useMemo(
    () => (filteredPods.length ? withAds(filteredPods, 1, (p) => p.subject === MOST_VIEWED_SUBJECT) : []),
    [filteredPods],
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-inverse-surface pb-10 pt-12 md:pb-12 md:pt-16">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #eaf1ff 1px, transparent 0)',
            backgroundSize: '24px 24px',
            opacity: 0.06,
          }}
        />
        <div className="shell relative">
          <h1 className="font-display text-headline-lg-mobile text-white md:text-display-sm">PODS OF WISDOM</h1>
          <p className="mt-2 max-w-2xl text-body-lg text-inverse-on-surface/75">Here are the free lessons.</p>
          <form role="search" onSubmit={(e) => e.preventDefault()} className="relative mt-5 max-w-md">
            <Icon
              name="search"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-inverse-on-surface/50"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pods…"
              aria-label="Search pods"
              className="w-full rounded-full border border-white/15 bg-white/10 py-3 pl-12 pr-11 text-label-lg text-white shadow-lift transition-[background-color,border-color,box-shadow] duration-200 ease-out placeholder:text-inverse-on-surface/50 hover:border-white/25 focus:border-primary focus:bg-white/15 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-inverse-on-surface/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon name="close" className="text-lg" />
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-0 z-30 border-b border-white/8 bg-inverse-surface py-4">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="hidden text-label-md font-medium text-inverse-on-surface/40 sm:inline">Filter:</span>
            {POD_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`shrink-0 rounded px-3 py-1.5 text-label-md font-semibold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
                  filter === f
                    ? 'bg-primary text-on-primary'
                    : 'border border-white/10 bg-white/5 text-inverse-on-surface/50 hover:border-white/20 hover:text-white'
                }`}
              >
                {f}
                {f === MOST_VIEWED_SUBJECT && (
                  <span className="ml-1.5 rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-bold uppercase">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pod grid */}
      <section className="bg-inverse-surface py-14">
        <div className="shell">
          {podItems.length === 0 ? (
            <div className="py-16 text-center">
              <Icon name="search" className="text-4xl text-inverse-on-surface/30" />
              <p className="mt-3 text-body-lg text-inverse-on-surface/60">No pods match your search.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setFilter('All')
                }}
                className="mt-4 text-label-lg font-semibold text-primary-fixed-dim underline-offset-4 hover:underline"
              >
                Clear search &amp; filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {podItems.map((it) =>
                it.type === 'ad' ? (
                  <PodAdCard key={it.key} />
                ) : (
                  <PodCard key={it.item.title} pod={it.item} />
                ),
              )}
            </div>
          )}

          {/* Teacher CTA */}
          <div className="mt-16 bg-primary p-8 text-center">
            <h3 className="font-display text-headline-md font-bold uppercase text-white">Are you a teacher or trainer?</h3>
            <p className="mt-2 text-body-sm text-white/65">
              Upload your own pods and reach thousands of Kenyan learners. Subject to verification and content review.
            </p>
            <Link
              to="/create-account"
              className="mt-5 inline-flex items-center gap-2 bg-white px-6 py-3 font-bold uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
            >
              <Icon name="co_present" className="text-base" />
              Apply to upload content
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
