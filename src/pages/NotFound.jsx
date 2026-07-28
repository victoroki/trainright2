import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <section className="bg-surface py-24">
      <div className="shell flex flex-col items-start gap-6">
        <span className="font-display text-[72px] font-extrabold leading-none text-primary/20">404</span>
        <h1 className="font-display text-headline-lg text-on-surface">This page is off the syllabus</h1>
        <p className="max-w-md text-body-md text-on-surface-variant">
          The link may be old or the page may have moved. Head back to Pods of Wisdom or reach the Help Desk.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="btn-primary">
            <Icon name="home" className="text-base" />
            Back to Pods of Wisdom
          </Link>
          <Link to="/help-desk" className="btn-secondary">
            Help Desk
          </Link>
        </div>
      </div>
    </section>
  )
}
