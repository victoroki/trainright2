// Central content model for trainright.co.ke.
// Copy is grounded in the client requirements document.

export const CONTACT = {
  phone: '0717859447',
  email: 'happy@trainright.co.ke',
  helpDeskUrl: 'https://ict-support.trainright.co.ke',
  learnerPortal: 'https://app.trainright.co.ke',
  staffPortal: 'https://staff.trainright.co.ke',
}

export const NAV_MAIN = [
  { label: 'Pods of Wisdom', to: '/' },
  { label: 'Our Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Revision & Assessment', to: '/revision-assessment' },
  { label: 'Teachers & Trainers', to: '/teachers-trainers' },
  { label: 'Buy a Book', to: '/buy-a-book' },
]

export const PREHEADER_LINKS = [
  { label: 'News and Events', to: '/news-and-events' },
  { label: 'Work with Us', to: '/work-with-us' },
  { label: 'Help Desk', to: '/help-desk' },
  { label: 'Data Protection', to: '/data-protection' },
]

export const SOCIALS = [
  { label: 'YouTube', short: 'YT', href: 'https://youtube.com' },
  { label: 'X (Twitter)', short: 'X', href: 'https://x.com' },
  { label: 'Instagram', short: 'IG', href: 'https://instagram.com' },
  { label: 'WhatsApp', short: 'WA', href: 'https://wa.me/254717859447' },
  { label: 'LinkedIn', short: 'in', href: 'https://linkedin.com' },
  { label: 'TikTok', short: 'TT', href: 'https://tiktok.com' },
]

export const SERVICES = [
  {
    icon: 'smart_display',
    title: 'Pods of Wisdom',
    desc: 'Free, short, high-impact videos from our teachers and trainers, organized by area of study.',
    access: 'Watch free on this page, or download the TrainRight Digital App for the full, personalized feed.',
    to: '/',
  },
  {
    icon: 'auto_stories',
    title: 'Lessons, Revision and Assessment',
    desc: 'Recorded and live lessons with auto-marked quizzes, plus free and paid revision and assessments.',
    access: 'Create an account, pick your level and subjects, then start from your learner dashboard.',
    to: '/revision-assessment',
  },
  {
    icon: 'groups',
    title: 'Educational Consultancy',
    desc: 'Tailored strategies for schools and institutions: curriculum rollout, systems and growth planning.',
    access: 'Reach us through the Help Desk or Contact Us page to book a consultancy session.',
    to: '/contact-us',
  },
  {
    icon: 'videocam',
    title: 'Conferences and Webinars',
    desc: 'Live interactive sessions with subject experts and education leaders, online and in person.',
    access: 'See upcoming sessions under News and Events and register from your account.',
    to: '/news-and-events',
  },
  {
    icon: 'labs',
    title: 'Research',
    desc: 'Education research that informs teaching practice, assessment quality and policy.',
    access: 'Request collaboration or findings through the Contact Us page.',
    to: '/contact-us',
  },
  {
    icon: 'psychology',
    title: 'Educational Mentorship',
    desc: 'Guided academic and career paths for learners preparing for the next level.',
    access: 'Register as a learner, then request mentorship from your account.',
    to: '/get-started',
  },
  {
    icon: 'co_present',
    title: 'Teacher and Trainer Support',
    desc: 'Lesson plans, schemes of work, curriculum designs, assessments, notes and college trainer tools.',
    access: 'Open a Teachers and Trainers account and subscribe to your level and subjects.',
    to: '/teachers-trainers',
  },
  {
    icon: 'campaign',
    title: 'Educational Advertisements',
    desc: 'Promote educational events, products and services to a targeted learning audience.',
    access: 'Contact our commercial team through Work with Us to place an advert.',
    to: '/work-with-us',
  },
  {
    icon: 'diversity_1',
    title: 'TrainRight Community Projects',
    desc: 'Sustainable social projects focused on literacy and digital inclusion.',
    access: 'Follow News and Events for active projects and how to take part.',
    to: '/news-and-events',
  },
  {
    icon: 'draw',
    title: 'Stationery, Teaching and Learning Materials',
    desc: 'Quality academic essentials supplied directly to learners and institutions.',
    access: 'Order through Buy a Book or request institutional supply via Contact Us.',
    to: '/buy-a-book',
  },
  {
    icon: 'school',
    title: 'TVET Training',
    desc: 'Vocational and technical training aligned to occupational standards, Levels 3 to 6.',
    access: 'Register, choose TVET Courses, then select your course and units.',
    to: '/get-started',
  },
]

export const POD_CATEGORIES = [
  {
    icon: 'calculate',
    bgIcon: 'functions',
    title: 'Mathematics',
    desc: 'From core algebra to advanced calculus, simplified for every learner.',
    tags: ['Algebra', 'Geometry', 'Statistics'],
  },
  {
    icon: 'biotech',
    bgIcon: 'science',
    title: 'Sciences',
    desc: 'Biology, Chemistry and Physics explained through visual experiments.',
    tags: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    icon: 'public',
    bgIcon: 'history_edu',
    title: 'Humanities',
    desc: 'History, Geography and Social Studies exploring our world and heritage.',
    tags: ['History', 'Geography', 'CRE'],
  },
  {
    icon: 'translate',
    bgIcon: 'forum',
    title: 'Languages',
    desc: 'English, Kiswahili, Kenya Sign Language and foreign languages in quick drills.',
    tags: ['English', 'Kiswahili', 'French'],
  },
  {
    icon: 'build',
    bgIcon: 'handyman',
    title: 'Technical & TVET',
    desc: 'Practical skills from electrical installation to fashion design, one pod at a time.',
    tags: ['Electrical', 'Wood Work', 'Hospitality'],
  },
  {
    icon: 'monitor',
    bgIcon: 'code',
    title: 'Technology',
    desc: 'Computer studies, ICT integration and digital literacy for every level.',
    tags: ['ICT', 'Computer Science', 'Coding'],
  },
]

// Free pods: durations follow the requirement (10s to 5min max).
export const POD_VIDEOS = [
  { title: 'Solving quadratic equations in 60 seconds', subject: 'Mathematics', level: 'Grade 10', duration: '1:00', teacher: 'M. Karanja', views: '48k' },
  { title: 'The water cycle, drawn live', subject: 'Sciences', level: 'Grade 6', duration: '0:45', teacher: 'S. Achieng', views: '32k' },
  { title: 'KCSE Chemistry: mole concept basics', subject: 'Sciences', level: 'Form 4', duration: '3:00', teacher: 'J. Mwangi', views: '61k' },
  { title: 'Insha format that earns full marks', subject: 'Languages', level: 'Form 4', duration: '2:00', teacher: 'R. Njeri', views: '27k' },
  { title: 'Mapwork: reading contours fast', subject: 'Humanities', level: 'Form 4', duration: '1:30', teacher: 'D. Otieno', views: '19k' },
  { title: 'Ohm\u2019s law on a real circuit', subject: 'Technical & TVET', level: 'TVET Level 5', duration: '4:00', teacher: 'Eng. Kiprop', views: '15k' },
  { title: 'Number patterns for Grade 3', subject: 'Mathematics', level: 'Grade 3', duration: '0:30', teacher: 'W. Wambui', views: '22k' },
  { title: 'Kenya Sign Language alphabet', subject: 'Languages', level: 'All levels', duration: '2:30', teacher: 'L. Muthoni', views: '38k' },
  { title: 'Computer basics: files and folders', subject: 'Technology', level: 'Grade 7', duration: '1:00', teacher: 'T. Kibet', views: '12k' },
]

export const FAQS = [
  {
    q: 'How do I create a TrainRight account?',
    a: 'Click Get Started, choose Learner, then register with a unique nickname, your learning level and subjects, a 4-character password, your phone number and email. We send an OTP to confirm your phone, and the system assigns you an account number such as K009876.',
  },
  {
    q: 'I forgot my password. What do I do?',
    a: 'Select Forgot Password on the Get Started page and enter your account number. An OTP is sent to the phone number you used at registration, and you reset the password through the link sent to your email or SMS.',
  },
  {
    q: 'Are the Pods of Wisdom really free?',
    a: 'Yes. Pods of Wisdom are free, short videos of between 10 seconds and 5 minutes, on the website and in the TrainRight Digital App. Adverts appear alongside them to keep them free.',
  },
  {
    q: 'How do I pay for a subscription?',
    a: 'All payments are made via MPESA pay bill or bank card. You receive a prompt to enter your PIN, and payment completes automatically. TRAINRIGHT then confirms your subscription by SMS, showing the service and its duration.',
  },
  {
    q: 'Can I use my account on more than one device?',
    a: 'Only one device can be logged in at a time. In the app you stay logged in and only re-enter your password once every 14 days. On a PC you log in with your account number and password each time.',
  },
  {
    q: 'How are quizzes and assessments marked?',
    a: 'Every lesson ends with a 5-question multiple-choice quiz that is auto-marked by the system. Results are shown immediately and stored in My Account, where you can download progress records in PDF.',
  },
  {
    q: 'I am a teacher. How do I upload lessons?',
    a: 'Open a Teachers and Trainers account. For every complete paid lesson you upload, you also contribute a short free pod. All uploads are approved by the Chief Education Officer and the Chief Executive Officer before release.',
  },
  {
    q: 'How does Buy a Book delivery work?',
    a: 'Book and laptop sellers list items on the marketplace. You pay for the item plus delivery via MPESA or bank card at checkout, and the order is delivered to your address.',
  },
]

// Registration levels and subjects, from the client requirements document.
export const LEVEL_GROUPS = [
  {
    group: 'Pre-Primary',
    prefix: 'K',
    levels: ['PP1', 'PP2'],
    subjects: ['Language Activities', 'Mathematics Activities', 'Creative Activities', 'Environmental Activities', 'Religious Activities'],
  },
  {
    group: 'Primary (Grade 1 to 3)',
    prefix: 'L',
    levels: ['GRADE 1', 'GRADE 2', 'GRADE 3'],
    subjects: ['Creative Activities', 'CRE', 'HRE', 'IRE', 'English Activities', 'Kiswahili', 'Mathematical Activities'],
  },
  {
    group: 'Primary (Grade 4 to 6)',
    prefix: 'L',
    levels: ['GRADE 4', 'GRADE 5', 'GRADE 6'],
    subjects: ['English', 'Kiswahili', 'Kenya Sign Language', 'Mathematics', 'CRE', 'HRE', 'IRE', 'Science and Technology', 'Home Science', 'Physical and Health Education', 'Agriculture', 'Social Studies', 'Creative Arts / Art and Craft', 'French', 'German', 'Mandarin', 'Arabic'],
  },
  {
    group: 'Junior School (Grade 7 to 9)',
    prefix: 'M',
    levels: ['GRADE 7', 'GRADE 8', 'GRADE 9'],
    subjects: ['Agriculture', 'Arabic', 'CRE', 'Computer Science', 'English', 'French', 'German', 'HRE', 'Home Science', 'Integrated Science', 'IRE', 'Kiswahili', 'Mandarin', 'Mathematics', 'Pre-Technical and Pre-Career Studies', 'Social Studies', 'Kenya Sign Language', 'Visual Arts', 'Performing Arts', 'Health Education', 'Business Studies', 'Physical Education & Sports'],
  },
  {
    group: 'Senior School (Grade 10 to 12)',
    prefix: 'M',
    levels: ['GRADE 10', 'GRADE 11', 'GRADE 12'],
    subjects: ['Core Mathematics', 'Essential Mathematics', 'English', 'Kiswahili', 'Kenya Sign Language', 'Community Service Learning', 'Physical Education', 'Information Communication Technology', 'Sports and Recreation', 'Music and Dance', 'Theatre and Film', 'Fine Arts', 'Literature in English', 'Fasihi ya Kiswahili', 'Arabic', 'French', 'German', 'Mandarin Chinese', 'CRE', 'IRE', 'HRE', 'Business Studies', 'History and Citizenship', 'Geography', 'Biology', 'Chemistry', 'Physics', 'General Science', 'Agriculture', 'Computer Studies', 'Home Science', 'Aviation', 'Building Construction', 'Electricity', 'Metal Work', 'Power Mechanics', 'Wood Technology', 'Media Technology', 'Marine and Fisheries Technology'],
  },
  {
    group: 'Form 4 (KCSE)',
    prefix: 'M',
    levels: ['FORM 4'],
    subjects: ['English', 'Kiswahili', 'Mathematics A', 'Mathematics B', 'Biology', 'Physics', 'Chemistry', 'General Science', 'History', 'Geography', 'CRE', 'HRE', 'IRE', 'Agriculture', 'Home Science', 'Computer Studies', 'French', 'German', 'Arabic', 'Music', 'Business Studies', 'Literature', 'Fasihi', 'Composition', 'Insha', 'Career Guidance', 'KCSE'],
  },
  {
    group: 'TVET Courses',
    prefix: 'N',
    levels: ['TVET Level 6', 'TVET Level 5', 'TVET Level 4', 'TVET Level 3'],
    subjects: ['Building Construction', 'Electrical Installation', 'Welding and Fabrication', 'Fashion Design and Interior Decor', 'Hairdressing and Beauty Therapy', 'Food and Beverage', 'Hospitality Management', 'Automotive Engineering', 'Plumbing', 'Carpentry and Joinery', 'ICT', 'Business Studies', 'Agriculture', 'Leather Work', 'Mechatronics'],
  },
  {
    group: 'Teacher Education: DTE-PP&P',
    prefix: 'P',
    levels: ['DTE-PP&P'],
    subjects: ['English', 'Kiswahili', 'Mathematics', 'Science and Technology', 'Environmental Education', 'Kenyan Sign Language', 'Physical and Health Education', 'Health and Nutrition', 'Agriculture', 'Christian Religious Education', 'Islamic Religious Education', 'Hindu Religious Education', 'Educational Resources', 'ICT Integration in Education', 'Educational Assessment', 'Research Skills', 'Educational Leadership and Management', 'Child Development and Psychology', 'Inclusive Education', 'Sociological and Philosophical Foundations of Education', 'Historical and Comparative Foundations of Education', 'Curriculum Studies', 'Art and Craft', 'Music', 'French', 'German', 'Mandarin', 'Arabic', 'Practicum'],
  },
  {
    group: 'Teacher Education: DSTE',
    prefix: 'Q',
    levels: ['DSTE'],
    subjects: ['Educational Assessment', 'Educational Management & Leadership', 'Education Resources', 'ICT Integration in Education', 'Research Skills', 'Child Development and Psychology', 'Inclusive Education', 'Sociological and Philosophical Foundations of Education', 'Historical and Comparative Foundations of Education', 'Curriculum Studies', 'Microteaching', 'Practicum', 'Community Service Learning', 'English', 'Literature in English', 'Kiswahili', 'Fasihi ya Kiswahili', 'Kenyan Sign Language (KSL)', 'Indigenous Languages', 'Arabic', 'French', 'German', 'Mandarin', 'Mathematics', 'Chemistry', 'Physics', 'Biology', 'Integrated Science', 'Agriculture', 'Health, Food and Nutrition', 'Home Science', 'Health Education', 'Home and Hospitality Management', 'Computer Science', 'Christian Religious Education (CRE)', 'Islamic Religious Education (IRE)', 'Hindu Religious Education (HRE)', 'Social Studies', 'Business Studies', 'History and Citizenship', 'Geography', 'Life Skills Education (LSE)', 'Sports and Recreation', 'Physical Education (PE)', 'Applied Arts', 'Visual Arts', 'Fine Arts', 'Music and Dance', 'Performing Arts', 'Theatre and Film', 'Wood Technology', 'Building Construction', 'Welding and Fabrication', 'Electrical Technology', 'Electrical Installation', 'Aviation Technology', 'Leather Work', 'Hairdressing and Beauty Therapy', 'Power Mechanics Technology', 'Pre-Technical Studies', 'Fashion Design and Interior Decor', 'Metal Technology', 'Textile Design Technology', 'Mechatronics', 'Media Technology'],
  },
]

export const TEACHER_MATERIALS = [
  {
    audience: 'Primary, Junior School and Senior School',
    icon: 'menu_book',
    items: ['Lesson plans', 'Schemes of work', 'Curriculum designs', 'Assessments', 'Notes'],
  },
  {
    audience: 'Colleges and TVET Institutions',
    icon: 'account_balance',
    items: ['Session plans', 'Learning plans', 'Assessment tools', 'Occupational Standards', 'Curriculum'],
  },
]

export const BOOK_CATEGORIES = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Senior School', 'TVET', 'Teacher Education']

export const PRODUCTS = [
  { name: 'New Progressive Primary English GD 4', category: 'Primary', type: 'Book', price: 620, seller: 'Nairobi Text Books' },
  { name: 'KLB Visionary Mathematics GD 7', category: 'Junior School', type: 'Book', price: 780, seller: 'KLB Store' },
  { name: 'Spotlight Chemistry Form 4', category: 'Senior School', type: 'Book', price: 950, seller: 'Nairobi Text Books' },
  { name: 'Fun with Language Activities PP1', category: 'Pre-Primary', type: 'Book', price: 480, seller: 'EduMart Kenya' },
  { name: 'TVET Electrical Installation Level 5 Manual', category: 'TVET', type: 'Book', price: 1450, seller: 'SkillPress' },
  { name: 'DSTE Educational Assessment Handbook', category: 'Teacher Education', type: 'Book', price: 1200, seller: 'SkillPress' },
  { name: 'Fasihi ya Kiswahili GD 10', category: 'Senior School', type: 'Book', price: 690, seller: 'EduMart Kenya' },
  { name: 'Agriculture Activities GD 5', category: 'Primary', type: 'Book', price: 560, seller: 'KLB Store' },
]

export const NEWS = [
  { date: '12 Aug 2026', tag: 'Announcement', title: 'TrainRight Digital App launches on Google Play', excerpt: 'Learners can now download the app, register in minutes and access free Pods of Wisdom across all levels.' },
  { date: '28 Aug 2026', tag: 'Webinar', title: 'Free KCSE Chemistry revision webinar', excerpt: 'A live session with our senior Chemistry trainers covering the mole concept and titration. Attendance is free for registered learners.' },
  { date: '05 Sep 2026', tag: 'Community', title: 'Digital inclusion drive visits Machakos County', excerpt: 'The TrainRight Community Projects team donates learning devices and runs a digital literacy bootcamp for 400 learners.' },
  { date: '19 Sep 2026', tag: 'Conference', title: 'National TVET trainers conference', excerpt: 'College trainers meet in Nairobi to align session plans and assessment tools with new occupational standards.' },
]

export const JOBS = [
  { title: 'Mathematics Teacher (Commission-based)', dept: 'Teaching and Training', type: 'Commission', location: 'Remote', closing: '15 Aug 2026' },
  { title: 'Digital Marketing Executive', dept: 'Commercial', type: 'Full time', location: 'Nairobi', closing: '22 Aug 2026' },
  { title: 'Software Developer (React and Node)', dept: 'Technology', type: 'Full time', location: 'Nairobi', closing: '29 Aug 2026' },
  { title: 'Customer Experience Executive', dept: 'Commercial', type: 'Full time', location: 'Nairobi', closing: '05 Sep 2026' },
  { title: 'College Trainer, Electrical Installation', dept: 'Teaching and Training', type: 'Commission', location: 'Hybrid', closing: '12 Sep 2026' },
]

export const PARTNERS = ['KLB', 'EduMart', 'SkillPress', 'CompuWorld']
