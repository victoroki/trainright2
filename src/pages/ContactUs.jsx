import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import { PageHero, SectionHeader, SocialChips } from '../components/ui.jsx'
import { CONTACT } from '../data/site.js'

export default function ContactUs() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        title="Talk to the TrainRight team"
        lead="Our contacts and location. We respond within one working day."
        icon="mail"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact details */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-container">
                    <Icon name="call" className="text-primary" />
                  </span>
                  <div>
                    <p className="text-label-lg text-on-surface">Call us</p>
                    <a
                      href={`tel:+254${CONTACT.phone.slice(1)}`}
                      className="mt-1 block text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-container">
                    <Icon name="mail" className="text-primary" />
                  </span>
                  <div>
                    <p className="text-label-lg text-on-surface">Email us</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-1 block text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-6 border-t border-outline-variant pt-6">
                <p className="mb-3 text-label-md uppercase tracking-widest text-on-surface-variant">Follow us</p>
                <SocialChips />
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <SectionHeader title="Send a message" />
            <div className="mt-8 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8">
              {sent ? (
                <div className="flex flex-col items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed">
                    <Icon name="check_circle" className="text-2xl text-on-primary-fixed-variant" fill />
                  </span>
                  <h3 className="font-display text-headline-sm text-on-surface">Message sent</h3>
                  <p className="text-body-sm text-on-surface-variant">
                    Thank you for reaching out. A member of our customer experience team will get back to you within
                    one working day.
                  </p>
                  <button type="button" onClick={() => setSent(false)} className="btn-secondary">
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="ct-name" className="field-label">
                        Full name
                      </label>
                      <input id="ct-name" required className="field" placeholder="Jane Mwangi" />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="field-label">
                        Email
                      </label>
                      <input id="ct-email" required type="email" className="field" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ct-subject" className="field-label">
                      Subject
                    </label>
                    <select id="ct-subject" className="field" defaultValue="General enquiry">
                      {['General enquiry', 'Consultancy booking', 'Partnerships', 'Advertising', 'Selling on Buy a Book', 'Community projects'].map(
                        (s) => (
                          <option key={s}>{s}</option>
                        ),
                      )}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ct-message" className="field-label">
                      Message
                    </label>
                    <textarea id="ct-message" required rows={5} className="field" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="btn-primary">
                    <Icon name="send" className="text-base" />
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
