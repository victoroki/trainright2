import Icon from './Icon.jsx'
import { PageHero } from './ui.jsx'

// Shared layout for policy pages: sticky section index + numbered sections.
export default function Legal({ eyebrow, title, lead, icon, updated, sections }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} icon={icon} />
      <section className="bg-surface py-16 md:py-20">
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-4">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-label-md uppercase tracking-widest text-on-surface-variant">On this page</p>
            <nav className="mt-4 flex flex-col gap-1" aria-label="Sections">
              {sections.map((s, i) => (
                <a
                  key={s.title}
                  href={`#s${i + 1}`}
                  className="rounded px-3 py-2 text-body-sm text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                >
                  {i + 1}. {s.title}
                </a>
              ))}
            </nav>
            {updated && (
              <p className="mt-6 flex items-center gap-2 text-label-md text-outline">
                <Icon name="update" className="text-base" />
                Last updated: {updated}
              </p>
            )}
          </aside>
          <div className="lg:col-span-3">
            {sections.map((s, i) => (
              <section key={s.title} id={`s${i + 1}`} className="border-b border-outline-variant/70 py-8 first:pt-0 last:border-b-0">
                <h2 className="flex items-baseline gap-3 font-display text-headline-sm text-on-surface">
                  <span className="text-primary/40">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {s.body.map((p, j) => (
                    <p key={j} className="max-w-3xl text-body-md text-on-surface-variant">
                      {p}
                    </p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-4 space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body-md text-on-surface">
                        <Icon name="check_circle" className="mt-0.5 shrink-0 text-lg text-primary" fill />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
