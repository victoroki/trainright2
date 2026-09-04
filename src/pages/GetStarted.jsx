import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { AdvertEnquiryInline } from '../components/AdvertEnquiry.jsx'
import { CONTACT, LEVEL_GROUPS } from '../data/site.js'

const ACCOUNT_RE = /^[KLMNPQ]\d{6}$/i

function passwordIssues(pw) {
  const letters = (pw.match(/[a-zA-Z]/g) || []).length
  const others = (pw.match(/[^a-zA-Z]/g) || []).length
  const issues = []
  if (pw.length !== 4) issues.push('exactly 4 characters')
  if (letters < 2) issues.push('at least 2 letters')
  if (others < 2) issues.push('at least 2 digits or special characters')
  return issues
}

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

function SuccessPanel({ account, level, subjects, onReset }) {
  return (
    <div className="flex flex-col items-start gap-5">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed">
        <Icon name="mark_email_read" className="text-3xl text-on-primary-fixed-variant" fill />
      </span>
      <div>
        <h3 className="font-display text-headline-md text-on-surface">Registration submitted</h3>
        <p className="mt-2 max-w-lg text-body-md text-on-surface-variant">
          An OTP has been sent by TRAINRIGHT to your phone to confirm the number. Once confirmed, a confirmation SMS
          with your account details follows.
        </p>
      </div>
      <div className="w-full rounded-xl bg-inverse-surface p-6">
        <p className="text-label-md uppercase tracking-widest text-inverse-on-surface/60">Your account number</p>
        <p className="mt-1 font-display text-display-lg text-white">{account}</p>
        <dl className="mt-4 grid grid-cols-1 gap-4 border-t border-white/10 pt-4 sm:grid-cols-2">
          <div>
            <dt className="text-label-md uppercase tracking-widest text-inverse-on-surface/60">Level</dt>
            <dd className="mt-1 text-body-sm font-semibold text-white">{level}</dd>
          </div>
          <div>
            <dt className="text-label-md uppercase tracking-widest text-inverse-on-surface/60">Subjects / Units</dt>
            <dd className="mt-1 text-body-sm font-semibold text-white">{subjects}</dd>
          </div>
        </dl>
      </div>
      <p className="flex items-start gap-2 text-body-sm text-on-surface-variant">
        <Icon name="play_circle" className="mt-0.5 text-lg shrink-0 text-secondary" />
        New here? Watch the 1-minute video on how to use the system, available on first sign-in.
      </p>
      <div className="flex flex-wrap gap-4">
        <button type="button" onClick={onReset} className="btn-primary">
          <Icon name="login" className="text-base" />
          Continue to sign in
        </button>
        <Link to="/" className="btn-tertiary">
          Explore Pods of Wisdom
        </Link>
      </div>
    </div>
  )
}

function LearnerPanel() {
  const [mode, setMode] = useState('register')
  const [form, setForm] = useState({
    nickname: '',
    groupIndex: '',
    level: '',
    subjects: [],
    promo: '',
    password: '',
    phone: '',
    email: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)
  const [forgotSent, setForgotSent] = useState(false)

  const group = LEVEL_GROUPS[form.groupIndex] || null
  const subjects = useMemo(() => group?.subjects ?? [], [group])

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const toggleSubject = (s) => {
    setForm((f) => ({
      ...f,
      subjects: f.subjects.includes(s) ? f.subjects.filter((x) => x !== s) : [...f.subjects, s],
    }))
    setErrors((e) => ({ ...e, subjects: undefined }))
  }

  const submitRegister = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.nickname.trim()) next.nickname = 'Enter a unique one name or nickname.'
    if (form.groupIndex === '') next.groupIndex = 'Select your learning level.'
    if (!form.level) next.level = 'Select a specific level.'
    if (form.subjects.length === 0) next.subjects = 'Select at least one subject or unit.'
    const pwIssues = passwordIssues(form.password)
    if (pwIssues.length) next.password = `Password must contain ${pwIssues.join(', ')}.`
    if (!/^(?:\+?254|0)\d{9}$/.test(form.phone.replace(/\s/g, ''))) next.phone = 'Enter a valid Kenyan phone number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.consent) next.consent = 'You must accept the data consent form to continue.'
    setErrors(next)
    if (Object.keys(next).length) return

    const digits = String(Math.floor(100000 + Math.random() * 900000))
    setResult({
      account: `${group.prefix}${digits}`,
      level: form.level,
      subjects: `${form.subjects.length} selected`,
    })
  }

  const submitLogin = (e) => {
    e.preventDefault()
    const next = {}
    if (!ACCOUNT_RE.test(form.nickname.trim())) next.nickname = 'Enter a valid account number, for example K009876.'
    if (!form.password) next.password = 'Enter your password.'
    setErrors(next)
    if (Object.keys(next).length) return
    setResult({ login: true })
  }

  const submitForgot = (e) => {
    e.preventDefault()
    if (!ACCOUNT_RE.test(form.nickname.trim())) {
      setErrors({ nickname: 'Enter a valid account number, for example K009876.' })
      return
    }
    setForgotSent(true)
  }

  const tabs = [
    { id: 'register', label: 'Register', icon: 'person_add' },
    { id: 'login', label: 'Sign in', icon: 'login' },
    { id: 'forgot', label: 'Forgot password', icon: 'lock_reset' },
  ]

  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm md:p-8">
      {result?.account ? (
        <SuccessPanel
          account={result.account}
          level={result.level}
          subjects={result.subjects}
          onReset={() => {
            setResult(null)
            setMode('login')
            setForm((f) => ({ ...f, nickname: '', password: '' }))
          }}
        />
      ) : result?.login ? (
        <div className="flex flex-col items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed">
            <Icon name="check_circle" className="text-2xl text-on-primary-fixed-variant" fill />
          </span>
          <h3 className="font-display text-headline-sm text-on-surface">You are signed in</h3>
          <p className="max-w-md text-body-sm text-on-surface-variant">
            On a PC you sign in with your account number and password each time. In the app, your password is asked
            once every 14 days. Only one device can be signed in at a time.
          </p>
          <a href="https://app.trainright.co.ke" target="_blank" rel="noreferrer" className="btn-primary">
            <Icon name="open_in_new" className="text-base" />
            Open the learner portal
          </a>
        </div>
      ) : (
        <>
          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Learner options">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={mode === t.id}
                onClick={() => {
                  setMode(t.id)
                  setErrors({})
                  setForgotSent(false)
                }}
                className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-label-lg font-semibold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
                  mode === t.id
                    ? 'bg-inverse-surface text-white shadow-lift'
                    : 'border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary hover:bg-surface-container-low'
                }`}
              >
                <Icon name={t.icon} className="text-base" />
                {t.label}
              </button>
            ))}
          </div>

          {mode === 'register' && (
            <form onSubmit={submitRegister} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="One name / Nickname" hint="Must be unique in the system." error={errors.nickname}>
                  <input
                    className="field"
                    value={form.nickname}
                    onChange={(e) => set('nickname', e.target.value)}
                    placeholder="SarahK"
                  />
                </Field>
                <Field label="Promo code (optional)" hint="Given by a marketer. Leave blank if none.">
                  <input
                    className="field"
                    value={form.promo}
                    onChange={(e) => set('promo', e.target.value)}
                    placeholder="e.g. TR2026"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Learning level" error={errors.groupIndex}>
                  <select
                    className="field"
                    value={form.groupIndex}
                    onChange={(e) => {
                      set('groupIndex', e.target.value === '' ? '' : Number(e.target.value))
                      set('level', '')
                      set('subjects', [])
                    }}
                  >
                    <option value="">Select level group...</option>
                    {LEVEL_GROUPS.map((g, i) => (
                      <option key={g.group} value={i}>
                        {g.group}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Class / Course" error={errors.level}>
                  <select
                    className="field"
                    value={form.level}
                    onChange={(e) => set('level', e.target.value)}
                    disabled={!group}
                  >
                    <option value="">{group ? 'Select...' : 'Select a level group first'}</option>
                    {group?.levels.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {group && (
                <Field
                  label={`Subjects / Units (${form.subjects.length} selected)`}
                  hint="For TVET, select your course units. Subjects update in the background after registration."
                  error={errors.subjects}
                >
                  <div className="max-h-48 space-y-1 overflow-y-auto rounded border border-outline-variant bg-surface-container-low p-3">
                    {subjects.map((s) => (
                      <label key={s} className="flex cursor-pointer items-center gap-2.5 rounded px-2 py-1.5 text-body-sm text-on-surface hover:bg-white">
                        <input
                          type="checkbox"
                          checked={form.subjects.includes(s)}
                          onChange={() => toggleSubject(s)}
                          className="h-4 w-4 rounded-sm border-outline text-primary focus:ring-secondary"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                </Field>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="4-character password"
                  hint="Exactly 4 characters: 2 letters and 2 digits or special characters."
                  error={errors.password}
                >
                  <input
                    className="field"
                    type="password"
                    maxLength={4}
                    value={form.password}
                    onChange={(e) => set('password', e.target.value)}
                    placeholder="e.g. a1b2"
                  />
                </Field>
                <Field label="Phone number" hint="Confirmed with an OTP sent by TRAINRIGHT." error={errors.phone}>
                  <input
                    className="field"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="07XXXXXXXX"
                  />
                </Field>
              </div>

              <Field label="Email address" error={errors.email}>
                <input
                  className="field"
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field error={errors.consent}>
                <label className="flex cursor-pointer items-start gap-3 text-body-sm text-on-surface">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set('consent', e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded-sm border-outline text-primary focus:ring-secondary"
                  />
                  <span>
                    I have read and accept the{' '}
                    <Link to="/data-protection" className="font-semibold text-secondary underline">
                      data consent form
                    </Link>
                    . For minors, a parent or guardian accepts on their behalf.
                  </span>
                </label>
              </Field>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Icon name="how_to_reg" className="text-base" />
                Submit application
              </button>
            </form>
          )}

          {mode === 'login' && (
            <form onSubmit={submitLogin} className="max-w-md space-y-5" noValidate>
              <Field label="Account number" hint="A letter and six digits, for example K009876." error={errors.nickname}>
                <input
                  className="field"
                  value={form.nickname}
                  onChange={(e) => set('nickname', e.target.value)}
                  placeholder="K009876"
                />
              </Field>
              <Field label="Password" error={errors.password}>
                <input
                  className="field"
                  type="password"
                  maxLength={4}
                  value={form.password}
                  onChange={(e) => set('password', e.target.value)}
                  placeholder="Your 4-character password"
                />
              </Field>
              <button type="submit" className="btn-primary">
                <Icon name="login" className="text-base" />
                Sign in
              </button>
              <p className="text-body-sm text-on-surface-variant">
                You will be signed out automatically after 3 minutes of inactivity.
              </p>
            </form>
          )}

          {mode === 'forgot' &&
            (forgotSent ? (
              <div className="flex max-w-md flex-col items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-fixed">
                  <Icon name="sms" className="text-2xl text-on-secondary-fixed-variant" fill />
                </span>
                <h3 className="font-display text-headline-sm text-on-surface">OTP sent</h3>
                <p className="text-body-sm text-on-surface-variant">
                  An OTP has been sent to the phone number registered with this account. Reset your password through
                  the link sent to your email or SMS.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForgotSent(false)
                    setMode('login')
                  }}
                  className="btn-secondary"
                >
                  Back to sign in
                </button>
              </div>
            ) : (
              <form onSubmit={submitForgot} className="max-w-md space-y-5" noValidate>
                <Field label="Account number" error={errors.nickname}>
                  <input
                    className="field"
                    value={form.nickname}
                    onChange={(e) => set('nickname', e.target.value)}
                    placeholder="K009876"
                  />
                </Field>
                <button type="submit" className="btn-primary">
                  <Icon name="sms" className="text-base" />
                  Send OTP
                </button>
              </form>
            ))}
        </>
      )}
    </div>
  )
}

function SchoolsPanel() {
  return (
    <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm md:p-8">
      <div className="mb-6 max-w-2xl">
        <h3 className="font-display text-headline-md text-on-surface">Schools and Colleges</h3>
        <p className="mt-2 text-body-md text-on-surface-variant">
          Create an advertising account to promote your school, college or education brand to learners, teachers
          and institutions on TrainRight.
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
  )
}

function TrainerPanel() {
  const [staffNo, setStaffNo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [ok, setOk] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!/^\d{4}\d{4}$/.test(staffNo.trim())) {
      setError('Enter your 8-digit staff number, for example 00012021.')
      return
    }
    if (!password) {
      setError('Enter your password.')
      return
    }
    setError('')
    setOk(true)
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
      <div id="trainer-sign-in" className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm md:p-8">
        {ok ? (
          <div className="flex flex-col items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed">
              <Icon name="check_circle" className="text-2xl text-on-primary-fixed-variant" fill />
            </span>
            <h3 className="font-display text-headline-sm text-on-surface">Welcome back</h3>
            <p className="text-body-sm text-on-surface-variant">
              Continue to the staff portal for My Profile, My Documents, uploads, assessments, My Team and My
              Students.
            </p>
            <a href="https://staff.trainright.co.ke" target="_blank" rel="noreferrer" className="btn-primary">
              <Icon name="open_in_new" className="text-base" />
              Open staff portal
            </a>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-5" noValidate>
            <h3 className="font-display text-headline-sm text-on-surface">Trainer and staff sign in</h3>
            <Field label="Staff number" hint="4 digits plus your year of joining, for example 00012021.">
              <input
                className="field"
                value={staffNo}
                onChange={(e) => {
                  setStaffNo(e.target.value)
                  setError('')
                }}
                placeholder="00012021"
              />
            </Field>
            <Field label="Password">
              <input
                className="field"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="Your password"
              />
            </Field>
            {error && (
              <p className="flex items-center gap-1.5 text-label-md font-semibold text-error">
                <Icon name="error" className="text-sm" />
                {error}
              </p>
            )}
            <button type="submit" className="btn-primary">
              <Icon name="login" className="text-base" />
              Sign in
            </button>
          </form>
        )}
      </div>

      <div className="rounded-2xl bg-inverse-surface p-6 md:p-8">
        <h3 className="font-display text-headline-sm text-white">New teacher or trainer?</h3>
        <p className="mt-2 text-body-sm text-inverse-on-surface/80">
          Staff accounts are created by HR after your documents are verified. Here is the journey:
        </p>
        <ol className="mt-6 space-y-4">
          {[
            'Click on "Create Account" button below',
            'Fill in the required details, upload application documents in soft copy.',
            'Fill in the consent form and submit your Account Creation request for review.',
            'HR assigns your staff number (4 digits + year of joining) and the system assigns your marketing number/Promo Code.',
            'An activation link is sent to your email.',
            'Create your password, read and accept the terms of employment, then sign and return the printed copies to HR. Your account is then activated.',
            'Start uploading lessons, pods of wisdom and assessments from your staff account.',
            'Use your promo account number to invite students to TrainRight Digital.',
            'Start earning commissions for the lessons, assessments and student referrals.',
          ].map((step, i) => (
            <li key={step} className="flex gap-3 text-body-sm text-inverse-on-surface">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary font-display text-[11px] font-bold text-white">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => document.getElementById('trainer-sign-in')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="btn-primary"
          >
            <Icon name="person_add" className="text-base" />
            Create Account
          </button>
          <Link
            to="/work-with-us"
            className="inline-flex items-center gap-2 rounded border border-white/30 px-5 py-2.5 text-label-lg text-white transition-colors hover:bg-white/10"
          >
            <Icon name="work" className="text-base" />
            See open Teaching and Training roles
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function GetStarted() {
  const [params, setParams] = useSearchParams()
  const role = params.get('role') === 'trainer' ? 'trainer' : params.get('role') === 'schools' ? 'schools' : 'learner'

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-inverse-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #eaf1ff 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary to-secondary" />
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="shell relative py-14 md:py-20">
          <h1 className="max-w-3xl font-display text-headline-lg-mobile text-white md:text-display-lg">
            Create an account or sign in
          </h1>
          <p className="mt-5 max-w-2xl text-body-lg text-inverse-on-surface/85">
            Learners, trainers and institutions sign in separately. Registration takes less than two minutes.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="shell max-w-5xl">
          {/* Tab bar — elevated pill style */}
          <div
            className="mb-10 rounded-2xl border border-outline-variant bg-surface-container-lowest p-1.5 shadow-sm"
            role="tablist"
            aria-label="Account type"
          >
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
              {[
                { id: 'learner', label: 'Learner', icon: 'school' },
                { id: 'trainer', label: 'Teacher / Trainer', icon: 'co_present' },
                { id: 'schools', label: 'Schools & Colleges', icon: 'account_balance' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={role === t.id}
                  onClick={() => setParams(t.id === 'learner' ? {} : { role: t.id })}
                  className={`relative flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-label-lg font-semibold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
                    role === t.id
                      ? 'bg-primary text-on-primary shadow-lift'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <Icon name={t.icon} className="text-lg" />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {role === 'learner' ? <LearnerPanel /> : role === 'schools' ? <SchoolsPanel /> : <TrainerPanel />}
        </div>
      </section>
    </>
  )
}
