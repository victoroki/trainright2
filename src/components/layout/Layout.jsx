import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Preheader from './Preheader.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Preheader />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
