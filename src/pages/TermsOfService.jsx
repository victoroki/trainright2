import Legal from '../components/Legal.jsx'

const SECTIONS = [
  {
    title: 'Acceptance of terms',
    body: [
      'By creating an account or using any TrainRight Technologies service, you agree to these Terms of Use and Service. They set out the procedures for providing our services and the terms of collaboration between you, TrainRight, teachers, trainers and sellers.',
    ],
  },
  {
    title: 'Accounts and sign-in',
    body: ['Your account is personal. The following rules keep it secure:'],
    list: [
      'One account, one device: only one device can be logged in at a time.',
      'On a PC, sign-in requires your account number and password every time.',
      'In the TrainRight Digital App, your password is required once every 14 days.',
      'You are logged out automatically after 3 minutes of inactivity.',
      'Profile details may be changed once per month.',
      'Password resets require an OTP sent to your registered phone number.',
    ],
  },
  {
    title: 'Subscriptions and payments',
    body: ['Paid services work as follows:'],
    list: [
      'All payments are made via MPESA pay bill to our bank account, or by bank card.',
      'You receive a prompt to enter your PIN, and payment completes automatically in the system.',
      'TRAINRIGHT confirms each subscription by SMS, showing the service and its duration.',
      'We notify you 2 days and again 1 day before your subscription ends.',
      'After expiry, you keep access to the free Pods of Wisdom and adverts until you renew.',
    ],
  },
  {
    title: 'Learning content and assessment',
    body: [
      'Lessons are divided into sections of between 1 and 5 minutes, delivered as recorded videos or infographics, each followed by an auto-marked 5-question MCQ quiz. Live lessons are delivered through Zoom, Google Meet, Webex, BigBlueButton or an equally convenient and affordable system.',
      'Certificates are issued for completed subjects and levels, in PDF format, within My Account.',
    ],
  },
  {
    title: 'Teachers and trainers',
    body: ['Content creators collaborate with TrainRight on these terms:'],
    list: [
      'For every complete paid lesson uploaded, the teacher or trainer contributes one free Pod of Wisdom.',
      'Uploads use TrainRight templates for videos, lessons and examinations.',
      'All uploads are approved by the Chief Education Officer and the Chief Executive Officer before release, and may be removed by them.',
      'Lesson plans are updated every three months and approved before use.',
      'Commissions and payslips are displayed in the staff portal and can be downloaded.',
    ],
  },
  {
    title: 'Acceptable use',
    body: ['You agree not to:'],
    list: [
      'Share your account or password with any other person.',
      'Copy, record or redistribute paid content outside the platform.',
      'Upload content that is unlawful, misleading or infringes intellectual property.',
      'Interfere with the security or operation of TrainRight systems.',
    ],
  },
  {
    title: 'Liability and governing law',
    body: [
      'We work hard to keep services available and content accurate, but we are not liable for interruptions caused by factors outside our reasonable control, including network and power failures.',
      'These terms are governed by the laws of Kenya. Disputes are resolved through good-faith engagement first, and through the Kenyan courts where resolution fails.',
    ],
  },
]

export default function TermsOfService() {
  return (
    <Legal
      title="The rules of the platform"
      icon="gavel"
      updated="January 2026"
      sections={SECTIONS}
    />
  )
}
