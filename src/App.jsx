import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import RevisionAssessment from './pages/RevisionAssessment.jsx'
import TeachersTrainers from './pages/TeachersTrainers.jsx'
import BuyABook from './pages/BuyABook.jsx'
import NewsEvents from './pages/NewsEvents.jsx'
import WorkWithUs from './pages/WorkWithUs.jsx'
import HelpDesk from './pages/HelpDesk.jsx'
import DataProtection from './pages/DataProtection.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import ContactUs from './pages/ContactUs.jsx'
import GetStarted from './pages/GetStarted.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="revision-assessment" element={<RevisionAssessment />} />
        <Route path="teachers-trainers" element={<TeachersTrainers />} />
        <Route path="buy-a-book" element={<BuyABook />} />
        <Route path="news-and-events" element={<NewsEvents />} />
        <Route path="work-with-us" element={<WorkWithUs />} />
        <Route path="help-desk" element={<HelpDesk />} />
        <Route path="data-protection" element={<DataProtection />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
