import Legal from '../components/Legal.jsx'

const SECTIONS = [
  {
    title: 'Overview',
    body: [
      'This Privacy Policy explains what information TrainRight Technologies collects through trainright.co.ke, the TrainRight Digital App and the learner, staff and support portals, and how that information is used.',
    ],
  },
  {
    title: 'Information we collect',
    body: ['We collect information you give us directly and information generated as you use the services:'],
    list: [
      'Registration details: nickname, learning level, subjects or courses, promo code, phone number and email.',
      'Account credentials: account number and password, stored in encrypted form.',
      'Learning activity: videos watched, lessons completed, quiz and assessment results.',
      'Transaction records: subscription payments and marketplace orders.',
      'Support interactions: Help Desk forms and communication with our teams.',
    ],
  },
  {
    title: 'How we use information',
    body: ['We use the information to:'],
    list: [
      'Create and secure your account, including OTP verification.',
      'Deliver lessons, revision and assessments matched to your level and subjects.',
      'Mark quizzes automatically and store results, records and certificates.',
      'Process payments and send SMS confirmations and expiry reminders.',
      'Improve our content, services and platform security.',
      'Send service updates, and news and event alerts you have opted into.',
    ],
  },
  {
    title: 'Sharing of information',
    body: [
      'We do not sell personal data. We share only what is necessary: payment confirmations with payment processors, and data with regulators where the law requires it.',
      'Teachers and trainers see learning activity only for students who access content they created.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'We use a small number of cookies to keep you signed in, remember your last access point in a lesson and measure site performance. You can disable cookies in your browser, but sign-in and lesson resume will not work without them.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Many of our learners are minors. Accounts for children must be registered with the consent of a parent or guardian, who accepts the data consent form on the child\u2019s behalf.',
    ],
  },
  {
    title: 'Your choices and rights',
    body: [
      'You may access, correct or request deletion of your personal data as described in our Data Protection statement. Profile details can be changed once per month from your account.',
      'Questions about privacy can be raised any time through the Help Desk or at happy@trainright.co.ke.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <Legal
      title="Your privacy, in plain language"
      lead="What we collect, why we collect it and the choices you have."
      icon="policy"
      updated="January 2026"
      sections={SECTIONS}
    />
  )
}
