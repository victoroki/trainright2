import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { Logo } from '../ui.jsx'
import { NAV_MAIN, PREHEADER_LINKS } from '../../data/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkCls = ({ isActive }) =>
    `pb-1 text-label-lg transition-colors ${
      isActive
        ? 'border-b-2 border-primary font-bold text-primary'
        : 'text-on-surface-variant hover:text-primary'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-outline-variant/70 bg-surface/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-[0_4px_12px_rgba(15,23,42,0.08)]' : ''
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Main">
          {NAV_MAIN.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/get-started"
            className="btn-primary hidden !px-4 !py-2 sm:inline-flex lg:hidden"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded text-on-surface transition-colors hover:bg-surface-container lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`grid overflow-hidden border-outline-variant/70 bg-surface transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <nav className="shell flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4" aria-label="Mobile">
            <Link
              to="/get-started"
              className="mb-1 flex items-center justify-center gap-2 rounded bg-primary px-4 py-3 text-label-lg text-on-primary"
            >
              <Icon name="person_add" className="text-xl" />
              Get Started
            </Link>
            {NAV_MAIN.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded px-3 py-3 text-label-lg ${
                    isActive ? 'bg-primary-fixed font-bold text-on-primary-fixed-variant' : 'text-on-surface hover:bg-surface-container'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-1 gap-1 border-t border-outline-variant/60 pt-3 sm:grid-cols-2">
              {PREHEADER_LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className="rounded px-3 py-2.5 text-body-sm text-on-surface-variant hover:bg-surface-container">
                  {l.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
