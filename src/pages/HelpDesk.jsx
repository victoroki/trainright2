import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { PageHero, SectionHeader } from '../components/ui.jsx'
import { CONTACT, FAQS } from '../data/site.js'

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-outline-variant/70 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className={`font-display text-base font-bold ${open ? 'text-primary' : 'text-on-surface'}`}>{q}</span>
        <Icon
          name="expand_more"
          className={`shrink-0 text-2xl transition-transform duration-300 ${open ? 'rotate-180 text-primary' : 'text-outline'}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-3xl pb-6 text-body-md text-on-surface-variant">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function HelpDesk() {
  const [openIndex, setOpenIndex] = useState(0)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    window.open(CONTACT.helpDeskUrl, '_blank', 'noopener')
  }

  return (
    <>
      <PageHero
        title="Answers, fast"
        lead="Browse the frequently asked questions. If they are not sufficient, fill in the help form and our ICT support team will respond."
        icon="support_agent"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* FAQs */}
          <div>
            <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
            <div className="mt-8 rounded-xl border border-outline-variant bg-surface-container-lowest px-6">
              {FAQS.map((f, i) => (
                <FaqItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>

          {/* Help form */}
          <div>
            <SectionHeader
              eyebrow="Still stuck?"
              title="Ask for help"
              lead="This form is redirected to our support portal at ict-support.trainright.co.ke."
            />
            <div className="mt-8 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8">
              {sent ? (
                <div className="flex flex-col items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed">
                    <Icon name="check_circle" className="text-2xl text-on-primary-fixed-variant" fill />
                  </span>
                  <h3 className="font-display text-headline-sm text-on-surface">Your request has been received</h3>
                  <p className="text-body-sm text-on-surface-variant">
                    A ticket has been opened with our ICT support team. You will receive a response by SMS and email
                    within one working day.
                  </p>
                  <a
                    href={CONTACT.helpDeskUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <Icon name="open_in_new" />
                    Track it on the support portal
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="hd-name" className="field-label">
                        Full name
                      </label>
                      <input id="hd-name" required className="field" placeholder="Jane Mwangi" />
                    </div>
                    <div>
                      <label htmlFor="hd-account" className="field-label">
                        Account number (optional)
                      </label>
                      <input id="hd-account" className="field" placeholder="K009876" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="hd-phone" className="field-label">
                        Phone number
                      </label>
                      <input id="hd-phone" required type="tel" className="field" placeholder="07XXXXXXXX" />
                    </div>
                    <div>
                      <label htmlFor="hd-email" className="field-label">
                        Email
                      </label>
                      <input id="hd-email" required type="email" className="field" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="hd-topic" className="field-label">
                      Topic
                    </label>
                    <select id="hd-topic" className="field" defaultValue="Login and password">
                      {['Login and password', 'Payments and subscriptions', 'Lessons and quizzes', 'Assessments and results', 'Buy a Book orders', 'Trainer uploads', 'Other'].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="hd-message" className="field-label">
                      How can we help?
                    </label>
                    <textarea id="hd-message" required rows={4} className="field" placeholder="Describe your issue..." />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Icon name="send" className="text-base" />
                    Submit to ICT support
                  </button>
                </form>
              )}
            </div>
            <p className="mt-4 flex items-center gap-2 text-body-sm text-on-surface-variant">
              <Icon name="call" className="text-lg text-secondary" />
              Prefer to talk? Call {CONTACT.phone} or email {CONTACT.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
