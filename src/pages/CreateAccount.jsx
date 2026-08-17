import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageHero } from '../components/ui.jsx'

const JOURNEY = [
  'Fill in the required details, upload application documents in soft copy.',
  'Fill in the consent form and submit your Account Creation request for review.',
  'HR assigns your staff number (4 digits + year of joining) and the system assigns your marketing number/Promo Code.',
  'An activation link is sent to your email.',
  'Create your password, read and accept the terms of employment, then sign and return the printed copies to HR. Your account is then activated.',
  'Start uploading lessons, pods of wisdom and assessments from your staff account.',
  'Use your promo account number to invite students to TrainRight Digital.',
  'Start earning commissions for the lessons, assessments and student referrals.',
]

function Field({ label, hint, error, children }) {
  return (
    <div>
      <span className="field-label">{label}</span>
      {children}
      {hint && !error && <p className="mt-1.5 text-label-md text-on-surface-variant">{hint}</p>}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-label-md font-semibold text-error">
          <Icon name="error" className="text-sm" />
          {error}
        </p>
      )}
    </div>
  )
}

function UploadBox({ label, file, onChange, accept, error }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-4 rounded-lg border border-dashed p-4 transition-[border-color,background-color] duration-200 ease-out hover:border-primary/60 hover:bg-primary-fixed/40 ${
        error ? 'border-error bg-error/5' : 'border-outline-variant bg-surface-container-low'
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-container">
        <Icon name={file ? 'description' : 'upload_file'} className="text-xl text-primary" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-label-lg font-semibold text-on-surface">
          {file ? file.name : label}
        </span>
        <span className="block text-label-md text-on-surface-variant">
          {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB — click to replace` : 'PDF, DOC or image. Max 10 MB per file.'}
        </span>
      </span>
      <input type="file" className="sr-only" accept={accept} onChange={(e) => onChange(e.target.files?.[0] || null)} />
      <Icon name="attach_file" className="shrink-0 text-on-surface-variant" />
    </label>
  )
}

export default function CreateAccount() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    subject: '',
    cv: null,
    certs: null,
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!/^(?:\+?254|0)\d{9}$/.test(form.phone.replace(/\s/g, ''))) next.phone = 'Enter a valid Kenyan phone number.'
    if (!form.role) next.role = 'Select the role you are applying for.'
    if (!form.subject.trim()) next.subject = 'Enter the subject or course you teach.'
    if (!form.cv) next.cv = 'Upload your CV to continue.'
    if (!form.consent) next.consent = 'You must accept the consent form to submit your request.'
    setErrors(next)
    if (Object.keys(next).length) return
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const reset = () => {
    setForm({ fullName: '', email: '', phone: '', role: '', subject: '', cv: null, certs: null, consent: false })
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="Account Creation"
          title="Your request has been received"
          lead="Our HR team will review your application and get back to you within 24 hours."
          icon="how_to_reg"
        />
        <section className="bg-surface py-16 md:py-20">
          <div className="shell max-w-3xl">
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed">
                <Icon name="mark_email_read" className="text-3xl text-on-primary-fixed-variant" fill />
              </span>
              <h2 className="mt-6 font-display text-headline-lg text-on-surface">Application submitted for review</h2>
              <p className="mt-3 max-w-xl text-body-md text-on-surface-variant">
                Here is what happens next — the same journey every teacher and trainer goes through:
              </p>
              <ol className="mt-8 space-y-3">
                {[
                  'HR assigns your staff number (4 digits + year of joining) and the system assigns your marketing number / Promo Code.',
                  'An activation link is sent to your email.',
                  'Create your password, read and accept the terms of employment, then sign and return the printed copies to HR. Your account is then activated.',
                  'Start uploading lessons, pods of wisdom and assessments from your staff account.',
                ].map((step, i) => (
                  <li key={step} className="flex gap-3 text-body-sm text-on-surface-variant">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-display text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-9 flex flex-wrap gap-4 border-t border-outline-variant pt-7">
                <Link to="/teaching-roles" className="btn-secondary">
                  <Icon name="work" className="text-base" />
                  See open teaching roles
                </Link>
                <button type="button" onClick={reset} className="btn-tertiary">
                  <Icon name="refresh" className="text-base" />
                  Submit another application
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="For Teachers and Trainers"
        title="Create Account"
        lead="Apply to teach on TrainRight, share Pods of Wisdom and earn commissions. Fill in the details below and upload your application documents in soft copy."
        icon="person_add"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="shell max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            {/* Application form */}
            <form onSubmit={submit} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-10" noValidate>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon name="badge" className="text-xl" fill />
                </span>
                <h2 className="font-display text-headline-md text-on-surface">Your details</h2>
              </div>

              <div className="mt-8 space-y-6">
                <Field label="Full name" error={errors.fullName}>
                  <input
                    className="field"
                    value={form.fullName}
                    onChange={(e) => set('fullName', e.target.value)}
                    placeholder="e.g. Jane Wanjiku"
                  />
                </Field>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Email address" error={errors.email}>
                    <input
                      className="field"
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Phone number" hint="An activation link and updates are sent here." error={errors.phone}>
                    <input
                      className="field"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      placeholder="07XXXXXXXX"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Applying as" error={errors.role}>
                    <select className="field" value={form.role} onChange={(e) => set('role', e.target.value)}>
                      <option value="">Select role...</option>
                      <option>Teacher</option>
                      <option>Trainer</option>
                      <option>Content Creator</option>
                      <option>Subject Expert</option>
                    </select>
                  </Field>
                  <Field label="Subject / Course you teach" error={errors.subject}>
                    <input
                      className="field"
                      value={form.subject}
                      onChange={(e) => set('subject', e.target.value)}
                      placeholder="e.g. Mathematics, Grade 7"
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon name="folder_open" className="text-xl" fill />
                </span>
                <h2 className="font-display text-headline-md text-on-surface">Application documents</h2>
              </div>

              <p className="mt-2 text-body-sm text-on-surface-variant">
                Upload your documents in soft copy. Your CV is required; certificates and academic transcripts are
                welcome.
              </p>

              <div className="mt-6 space-y-4">
                <UploadBox
                  label="Curriculum Vitae (CV) *"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  file={form.cv}
                  onChange={(f) => set('cv', f)}
                  error={errors.cv}
                />
                <UploadBox
                  label="Certificates & transcripts (optional)"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  file={form.certs}
                  onChange={(f) => set('certs', f)}
                />
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon name="verified_user" className="text-xl" fill />
                </span>
                <h2 className="font-display text-headline-md text-on-surface">Consent</h2>
              </div>

              <div className="mt-6">
                <Field error={errors.consent}>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-outline-variant bg-surface-container-low p-4 text-body-sm text-on-surface">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => set('consent', e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded-sm border-outline text-primary focus:ring-secondary"
                    />
                    <span>
                      I confirm the details and documents above are genuine, and I have read and accept the{' '}
                      <Link to="/data-protection" className="font-semibold text-secondary underline">
                        data consent form
                      </Link>{' '}
                      and the terms of employment before my account is activated.
                    </span>
                  </label>
                </Field>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button type="submit" className="btn-primary">
                  <Icon name="send" className="text-base" />
                  Submit Account Creation request
                </button>
                <Link to="/get-started?role=trainer" className="btn-tertiary">
                  Already have a staff account? Sign in
                </Link>
              </div>
            </form>

            {/* Journey rail */}
            <aside className="h-fit rounded-xl bg-inverse-surface p-6 md:p-8 lg:sticky lg:top-24">
              <h3 className="font-display text-headline-sm text-white">What happens after you apply</h3>
              <ol className="mt-6 space-y-4">
                {JOURNEY.map((step, i) => (
                  <li key={step} className="flex gap-3 text-body-sm text-inverse-on-surface">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-display text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-7 rounded-lg bg-white/5 p-4">
                <p className="flex items-start gap-2 text-label-md text-inverse-on-surface/80">
                  <Icon name="schedule" className="mt-0.5 shrink-0 text-secondary" />
                  Requests are reviewed within 24 hours. You will be contacted on the email you provide.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
