import Legal from '../components/Legal.jsx'

const SECTIONS = [
  {
    title: 'Our commitment',
    body: [
      'TrainRight Technologies is committed to protecting the privacy of client and staff data. This statement outlines how we handle personal data in line with the requirements of the Data Protection Commissioner under the Data Protection Act, 2019 of Kenya.',
      'We collect only the data needed to deliver our services, we use it only for the purposes stated at collection, and we never sell personal data to third parties.',
    ],
  },
  {
    title: 'Data we collect',
    body: ['At registration and while using our services, we may collect:'],
    list: [
      'Identity data: one name or nickname, learning level and selected subjects or courses.',
      'Contact data: phone number and email address, confirmed by OTP at registration.',
      'Account data: system-assigned account number, password (stored encrypted) and promo code where provided.',
      'Learning data: lessons accessed, quiz and assessment attempts, results and certificates.',
      'Payment data: MPESA or card transaction confirmations and account statements.',
      'Staff data: official names, phone number, national ID number and employment documents, collected by HR.',
    ],
  },
  {
    title: 'Consent',
    body: [
      'Every learner accepts a data consent form before submitting a registration. Registration cannot proceed without it.',
      'Where a learner is a minor, consent must be given by a parent or guardian. Staff give consent as part of their terms of employment.',
    ],
  },
  {
    title: 'How we protect your data',
    body: ['Our systems are designed with the necessary security features, including blending with available anti-virus software. Additional safeguards include:'],
    list: [
      'One-device login: only one device can be signed in to an account at a time.',
      'Automatic logout after 3 minutes of inactivity.',
      'Passwords required on every PC login, and at least once every 14 days in the app.',
      'OTP verification for registration and password resets.',
      'Role-based access: officers can only make changes in areas that concern them.',
    ],
  },
  {
    title: 'Your rights',
    body: ['Under the Data Protection Act, 2019, you have the right to:'],
    list: [
      'Access the personal data we hold about you.',
      'Request correction of inaccurate or incomplete data.',
      'Request deletion of your data, subject to legal retention requirements.',
      'Object to or restrict certain processing.',
      'Withdraw consent at any time, without affecting prior lawful processing.',
    ],
  },
  {
    title: 'Data retention and profile changes',
    body: [
      'Learners may change their profile once per month whenever there is need. Staff may update their profiles twice in a year through the staff portal.',
      'Learning records, statements and certificates are retained for as long as your account is active, and for the period required by Kenyan law after closure.',
    ],
  },
  {
    title: 'Complaints',
    body: [
      'To exercise any of these rights or raise a concern, contact our Data Protection Officer through the Help Desk or at happy@trainright.co.ke.',
      'If you are not satisfied with our response, you have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC), Kenya.',
    ],
  },
]

export default function DataProtection() {
  return (
    <Legal
      title="How we protect your data"
      lead="Our commitment to protect the privacy of client and staff data, as required by the Data Protection Commissioner."
      icon="shield"
      updated="January 2026"
      sections={SECTIONS}
    />
  )
}
