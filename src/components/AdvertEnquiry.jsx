import { useState } from 'react'
import Icon from './Icon.jsx'

export const ADVERT_SUBJECT = 'I Wish to Place My Advert for Review.'

// File-size figure is a placeholder to be confirmed by the client (see summary).
export const ADVERT_LIMITS = 'Your advert video is limited to 3 minutes and a maximum file size of 50MB.'

function AdvertForm({ onSubmitted }) {
  const [fileName, setFileName] = useState('')
  const [videoMethod, setVideoMethod] = useState('upload')
  const [videoLink, setVideoLink] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSubmitted()
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="advert-org" className="field-label">
          Name of School/College/Company
        </label>
        <input id="advert-org" required className="field" placeholder="e.g. Starehe Boys Centre" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="advert-name" className="field-label">
            Full name
          </label>
          <input id="advert-name" required className="field" placeholder="Jane Mwangi" />
        </div>
        <div>
          <label htmlFor="advert-phone" className="field-label">
            Phone No.
          </label>
          <input id="advert-phone" required type="tel" className="field" placeholder="07XXXXXXXX" />
        </div>
      </div>
      <div>
        <label htmlFor="advert-email" className="field-label">
          Email
        </label>
        <input id="advert-email" required type="email" className="field" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="advert-subject" className="field-label">
          Subject
        </label>
        <input
          id="advert-subject"
          readOnly
          value={ADVERT_SUBJECT}
          className="field cursor-not-allowed bg-surface-container/60 text-on-surface-variant"
        />
      </div>

      {/* Advert delivery method */}
      <div>
        <span className="field-label">Advert video</span>
        <div className="mb-3 flex gap-2">
          <button
            type="button"
            onClick={() => setVideoMethod('upload')}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-label-lg font-semibold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
              videoMethod === 'upload'
                ? 'bg-inverse-surface text-white'
                : 'border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary'
            }`}
          >
            <Icon name="upload_file" className="text-base" />
            Upload file
          </button>
          <button
            type="button"
            onClick={() => setVideoMethod('link')}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-label-lg font-semibold transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97] ${
              videoMethod === 'link'
                ? 'bg-inverse-surface text-white'
                : 'border border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary'
            }`}
          >
            <Icon name="link" className="text-base" />
            Paste a link
          </button>
        </div>

        {videoMethod === 'upload' ? (
          <>
            <label className="group flex min-h-14 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low px-6 py-5 text-center transition-[border-color,background-color] duration-200 ease-out hover:border-primary hover:bg-primary-fixed/30">
              <Icon name="cloud_upload" className="text-3xl text-primary" />
              <span className="text-body-md font-semibold text-on-surface">
                {fileName || 'Click to upload your advert'}
              </span>
              <span className="text-label-md text-on-surface-variant">
                Video, audio, PDF, JPG or PNG — up to 50 MB
              </span>
              <input
                type="file"
                className="sr-only"
                accept="video/*,audio/*,.pdf,.jpg,.jpeg,.png"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
              />
            </label>
            {fileName && (
              <p className="mt-2.5 flex items-center gap-2 text-label-md text-secondary">
                <Icon name="check_circle" className="text-base" fill />
                {fileName}
              </p>
            )}
          </>
        ) : (
          <div>
            <input
              type="url"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="field"
              placeholder="https://youtube.com/watch?v=... or any video link"
            />
            <p className="mt-1.5 text-label-md text-on-surface-variant">
              Paste a YouTube, Google Drive, Dropbox or any public video link.
            </p>
          </div>
        )}

        <p className="mt-2 flex items-start gap-1.5 text-label-md text-on-surface-variant">
          <Icon name="info" className="mt-px shrink-0 text-base text-secondary" />
          {ADVERT_LIMITS}
        </p>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Icon name="send" className="text-base" />
        Submit advert for review
      </button>
    </form>
  )
}

function AdvertConfirmation({ onClose }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed">
        <Icon name="mark_email_read" className="text-3xl text-on-primary-fixed-variant" fill />
      </span>
      <h3 className="font-display text-headline-md text-on-surface">Request received</h3>
      <p className="max-w-md text-body-md text-on-surface-variant">
        Your request has been received, It will be processed within 24 hours and a response sent to your email for
        further action
      </p>
      <button type="button" onClick={onClose} className="btn-secondary">
        Close
      </button>
    </div>
  )
}

export function AdvertEnquiryModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const close = () => {
    setSubmitted(false)
    onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Place an advert"
    >
      <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden="true" />
      <div className="relative max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-xl bg-surface-container-lowest p-6 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
        >
          <Icon name="close" className="text-2xl" />
        </button>
        {submitted ? (
          <AdvertConfirmation onClose={close} />
        ) : (
          <>
            <h3 className="font-display text-headline-md text-on-surface">Place an advert</h3>
            <p className="mt-2 mb-6 max-w-lg text-body-sm text-on-surface-variant">
              Fill in your details and upload the advert for review. The Subject is fixed for this request.
            </p>
            <AdvertForm onSubmitted={() => setSubmitted(true)} />
          </>
        )}
      </div>
    </div>
  )
}

export function AdvertEnquiryInline() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-low p-5 md:p-6">
      {submitted ? (
        <AdvertConfirmation onClose={() => setSubmitted(false)} />
      ) : (
        <>
          <h4 className="font-display text-headline-sm text-on-surface">Create an advertising account</h4>
          <p className="mt-2 mb-6 text-body-sm text-on-surface-variant">
            Fill in your details and upload the advert for review. The Subject is fixed for this request.
          </p>
          <AdvertForm onSubmitted={() => setSubmitted(true)} />
        </>
      )}
    </div>
  )
}
