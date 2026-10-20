import type {
  ProfileInfo,
  SkillCategory,
  Project,
  ExperienceItem,
  CreativeMediaItem,
  BlogPost,
  TestimonialItem,
} from '../types';

/**
 * =========================================================================
 * PERSONAL BRANDING & PROFILE CONFIGURATION
 * All personal details, contact info, and branding slogans are configured here.
 * =========================================================================
 */
export const profileData: ProfileInfo = {
  name: 'Mwanje Blessing',
  title: 'Software Engineer | Full-Stack Web Developer | Creative Digital Professional',
  brand: 'Blessing Technologies',
  slogan: 'Building Tech. Building Legacy.',
  location: 'Kampala, Uganda',
  availability: 'Available for Freelance & Remote Opportunities Worldwide',
  objective:
    'To build useful digital solutions, create engaging visual content, solve problems through technology, and collaborate with clients and teams around the world.',
  headline: "Hi, I'm Mwanje Blessing.",
  subheadline:
    'I Build Digital Experiences, Develop Powerful Systems, and Create Engaging Content.',
  supportingText:
    "I'm a software engineering student and digital creator passionate about backend development, modern web applications, livestreaming, and visual storytelling. I help turn ideas into practical digital solutions.",
  educationSummary:
    'Currently pursuing a Diploma in Software Engineering, bridging rigorous computer science fundamentals with practical, real-world development.',
  interests: {
    technical: [
      'Backend Architecture & Systems',
      'Relational Database Modeling',
      'API Design & Authentication',
      'Modern Web Applications (React & Full-Stack)',
      'Offline-First Desktop & Mobile Systems',
    ],
    creative: [
      'Multi-Camera Livestream Production',
      'Cinematic Video Editing & Post-Production',
      'Graphic Design & High-Impact Promotional Posters',
      'Visual Storytelling & Brand Identity',
      'Church Media Operations',
    ],
    administrative: [
      'Data Entry & Verification',
      'Virtual Assistance & Workflow Automation',
      'Online Research & Market Insights',
      'Digital Organization & Documentation',
    ],
  },
  contact: {
    email: 'blessingmwanje@gmail.com', // Replace with your primary email address
    phone: '+256 750 000 000', // Replace with your active telephone number
    whatsappNumber: '256750000000', // Country code without '+' followed by number
    whatsappMessage:
      'Hello Mwanje Blessing, I came across your portfolio website and would like to discuss a project or collaboration opportunity.',
    location: 'Kampala, Uganda (East Africa Time - UTC+3)',
    github: 'https://github.com/mwanjeblessing', // Replace with your active GitHub profile
    linkedin: 'https://linkedin.com/in/mwanje-blessing', // Replace with your LinkedIn URL
    upwork: 'https://www.upwork.com/freelancers/~mwanjeblessing', // Replace with your Upwork profile URL
    youtube: 'https://youtube.com/@blessingtechnologies', // Replace with your YouTube or streaming channel
  },
  stats: [
    {
      label: 'Specialized Focus',
      value: 'Full-Stack',
      description: 'Web & Systems Development',
    },
    {
      label: 'Core Competency',
      value: 'Backend',
      description: 'Python, PHP, SQL & APIs',
    },
    {
      label: 'Creative Work',
      value: 'Media & Stream',
      description: 'Video Editing & Broadcasts',
    },
    {
      label: 'Availability',
      value: 'Worldwide',
      description: 'Remote & Freelance Ready',
    },
  ],
};

/**
 * =========================================================================
 * SKILLS & SERVICES CONFIGURATION
 * Organized into Software Development, Creative Services, and Administrative Support.
 * Skill indicators show practical proficiency without overpromising.
 * =========================================================================
 */
export const skillsData: SkillCategory[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    icon: 'Code2',
    color: 'from-blue-600 to-indigo-600',
    description:
      'Designing robust backend architectures, clean relational databases, and responsive modern user interfaces.',
    skills: [
      {
        name: 'Backend Architecture',
        proficiency: 'Practical Experience',
        tags: ['PHP', 'Python', 'Django', 'APIs', 'Authentication', 'Server Logic'],
      },
      {
        name: 'Frontend Development',
        proficiency: 'Proficient',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
      },
      {
        name: 'Databases & Data Modeling',
        proficiency: 'Practical Knowledge',
        tags: ['MySQL', 'SQLite', 'Database Schema Design', 'SQL Queries', 'Relational Models'],
      },
      {
        name: 'Developer Tooling & Workflow',
        proficiency: 'Daily Use',
        tags: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Vite', 'RESTful APIs'],
      },
    ],
  },
  {
    id: 'creative-services',
    title: 'Creative Services',
    icon: 'Video',
    color: 'from-purple-600 to-pink-600',
    description:
      'High-impact visual communication, live broadcast streaming, and media production with storytelling at the center.',
    skills: [
      {
        name: 'Video Editing & Assembly',
        proficiency: 'Advanced Practice',
        tags: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Color Grading', 'Audio Mastering', 'Shorts/Reels'],
      },
      {
        name: 'Livestream Production & Setup',
        proficiency: 'Live Operator',
        tags: ['OBS Studio', 'vMix', 'Multi-Camera Switching', 'Audio Routing', 'YouTube/Facebook Live'],
      },
      {
        name: 'Graphic Design & Posters',
        proficiency: 'Skilled',
        tags: ['Adobe Photoshop', 'Canva Pro', 'Event Posters', 'Social Media Creatives', 'Flyers'],
      },
      {
        name: 'Content & Visual Storytelling',
        proficiency: 'Practicing',
        tags: ['Church Media', 'Promotional Campaigns', 'Brand Identity', 'Scripting & Pacing'],
      },
    ],
  },
  {
    id: 'admin-support',
    title: 'Administrative & Remote Support',
    icon: 'Briefcase',
    color: 'from-cyan-600 to-blue-600',
    description:
      'Dependable, structured digital support ensuring accurate data processing, documentation, and organized project workflows.',
    skills: [
      {
        name: 'Data Entry & Data Cleaning',
        proficiency: 'Detail-Oriented',
        tags: ['Excel / Spreadsheets', 'Google Sheets', 'Data Accuracy', 'Record Keeping'],
      },
      {
        name: 'Virtual Assistance',
        proficiency: 'Reliable',
        tags: ['Email Management', 'Task Scheduling', 'Client Correspondence', 'File Organization'],
      },
      {
        name: 'Online Research & Insights',
        proficiency: 'Thorough',
        tags: ['Market Investigation', 'Technical Fact-Finding', 'Synthesis & Summary Reports'],
      },
      {
        name: 'Digital Documentation',
        proficiency: 'Methodical',
        tags: ['Standard Operating Procedures', 'User Manuals', 'System Requirements'],
      },
    ],
  },
];

/**
 * =========================================================================
 * PROJECTS PORTFOLIO
 * Clearly identifies Completed, In Progress, and Concept projects.
 * =========================================================================
 */
export const projectsData: Project[] = [
  {
    id: 'faith-connect-app',
    title: 'Faith Connect App',
    tagline: 'Modern Christian Community Mobile Application Concept',
    category: 'Mobile Applications',
    status: 'Concept',
    isFeatured: true,
    problem:
      'Modern faith communities and churches often struggle to keep dispersed members engaged with sermons, urgent prayer requests, ministry announcements, and transparent digital giving through a unified, clutter-free mobile platform.',
    solution:
      'Faith Connect is designed as a focused mobile application tailored for Christian congregations. It unites streaming sermon audio/video, scheduled push announcements, an interactive prayer wall, and secure mobile tithes/offerings.',
    features: [
      'Sermon Stream Player with playback speed and offline downloads preview',
      'Interactive Prayer Request board with privacy flags (public / pastors-only)',
      'Real-time Church Announcements feed with event calendar syncing',
      'Community Giving dashboard for tithes, offerings, and project pledges',
      'Clean Christian aesthetic with dark mode and golden accents',
    ],
    technologies: ['React Native / Android Studio', 'Python / Django API', 'SQLite / PostgreSQL', 'Figma UX'],
    image: '/images/faith-connect.jpg',
    githubUrl: null, // Set to repo link when repository is public
    demoUrl: null,
  },
  {
    id: 'wellspring-school-management',
    title: 'Wellspring School Management System',
    tagline: 'Offline-First School Financial Management & Fee Tracking Software',
    category: 'Software Systems',
    status: 'Concept',
    isFeatured: true,
    problem:
      'Schools in emerging regions with intermittent or expensive internet connectivity face severe financial bottlenecks: lost physical receipt books, unrecorded fee balances, manual reporting errors, and chaotic start-of-term student clearance.',
    solution:
      'Wellspring is proposed as an offline-first desktop application engineered specifically for school bursars and administrative officers. It operates locally on standard computers, managing fee payments, generating tamper-evident digital receipts, and tracking required scholastic materials.',
    features: [
      'Student Fee Payment Ledger with installment tracking and balance warnings',
      'Instant Digital Printable Receipts with verification QR codes',
      'Term Requirements Checklist (brooms, reams of paper, laboratory fees)',
      'Offline-first SQLite database with automated daily local backups',
      'Daily, monthly, and end-of-term bursary audit reports in PDF and Excel',
    ],
    technologies: ['Python / Tkinter or Electron', 'SQLite', 'ReportLab (PDF)', 'PHP / MySQL Prototype'],
    image: '/images/wellspring-sms.jpg',
    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 'blessing-technologies-website',
    title: 'Blessing Technologies Digital Brand',
    tagline: 'Agency Brand Portal Showcasing Engineering & Media Solutions',
    category: 'Web Development',
    status: 'Completed',
    isFeatured: true,
    problem:
      'Freelance clients and businesses seeking technical and creative services need an authoritative, modern digital destination to understand capabilities, review previous deliverables, and initiate projects without friction.',
    solution:
      'Created a high-performance web platform under the "Blessing Technologies" banner embodying the slogan "Building Tech. Building Legacy." Features dark navy glassmorphic aesthetics, responsive project galleries, technical writing, and direct contact gateways.',
    features: [
      'High-performance React & Vite frontend with responsive Tailwind design system',
      'Filterable multi-category portfolio supporting software and media showcases',
      'Integrated contact hub with direct WhatsApp messaging and validated inquiry forms',
      'Full-stack configuration architecture allowing zero-code content updates',
      'SEO-optimized metadata and accessible keyboard navigation',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    image: '/images/blessing-tech.jpg',
    githubUrl: 'https://github.com/mwanjeblessing/portfolio-blessing-technologies',
    demoUrl: '#home',
  },
  {
    id: 'church-media-production',
    title: 'Church Media & Livestream Production',
    tagline: 'Professional Multi-Camera Broadcast & Christian Visual Media',
    category: 'Creative Media',
    status: 'Completed',
    isFeatured: true,
    problem:
      'Worship ministries frequently encounter audio sync latency, poor camera framing, irregular livestreaming quality, and uninspiring promotional flyers that fail to reach digital congregation members.',
    solution:
      'Delivered end-to-end media operations including hardware camera switching, live audio routing, software encoder tuning in OBS/vMix, sermon highlight video editing, and high-resolution event promotional posters.',
    features: [
      'Multi-camera switching and low-latency live streaming to YouTube & Facebook Live',
      'Broadcast-grade lower-thirds, scripture slides, and worship lyric overlays',
      'Post-service sermon reel editing optimized for TikTok, Instagram Reels, and YouTube Shorts',
      'High-impact event promotional graphics and flyers for conferences and youth revivals',
      'Operator setup documentation and audio board EQ calibration for spoken word',
    ],
    technologies: ['OBS Studio', 'vMix', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Audio Mixers'],
    image: '/images/church-media.jpg',
    githubUrl: null,
    demoUrl: '#creative-media',
  },
];

/**
 * =========================================================================
 * EXPERIENCE & EDUCATION TIMELINE
 * Realistic, verifiable academic path and practical project milestones.
 * Dates and exact responsibilities remain fully editable.
 * =========================================================================
 */
export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-software-engineering',
    period: '2024 – Present (Ongoing)',
    role: 'Diploma in Software Engineering',
    institution: 'Higher Education Institute',
    location: 'Kampala, Uganda',
    type: 'education',
    current: true,
    description:
      'Undergoing formal training in software engineering principles, algorithms, relational database administration, object-oriented programming, and web systems development.',
    highlights: [
      'Core focus on backend systems, server-side programming, and SQL database design',
      'Practical software laboratory coursework building desktop, mobile, and web solutions',
      'Active collaboration on group development tasks and software architecture planning',
    ],
  },
  {
    id: 'proj-wellspring-dev',
    period: '2025 – Present',
    role: 'Lead Systems Designer & Developer',
    institution: 'Wellspring School Management Initiative',
    location: 'Kampala, Uganda',
    type: 'project',
    current: true,
    description:
      'Conceptualized and architected an offline-ready school fee tracking and administrative tool for regional institutions encountering unreliable internet access.',
    highlights: [
      'Designed normalized relational database schemas for student accounts and fees ledger',
      'Engineered automated receipt numbering and audit reporting routines',
      'Conducted user requirement interviews with school staff to refine workflow needs',
    ],
  },
  {
    id: 'exp-church-media-lead',
    period: '2023 – Present',
    role: 'Media Specialist & Livestream Operator',
    institution: 'Church & Ministry Media Department',
    location: 'Kampala, Uganda',
    type: 'experience',
    current: true,
    description:
      'Overseeing weekly live video broadcasts, audio monitoring, visual presentations, and post-production video editing for faith community events.',
    highlights: [
      'Configured multi-camera video switchers, audio feeds, and encoder settings in OBS Studio',
      'Produced promotional event posters, sermon graphics, and social media announcements',
      'Trained auxiliary volunteers on video equipment operation and live broadcast standards',
    ],
  },
  {
    id: 'exp-freelance-digital',
    period: '2024 – Present',
    role: 'Founder & Full-Stack Developer',
    institution: 'Blessing Technologies',
    location: 'Kampala, Uganda / Remote',
    type: 'experience',
    current: true,
    description:
      'Offering tailored web development, custom software prototypes, graphic design, and digital support services to regional and remote clients.',
    highlights: [
      'Building responsive websites using modern frontend frameworks and clean CSS',
      'Assisting small organizations with data organization, research, and documentation',
      'Providing technical consultation on video streaming setups and digital presence',
    ],
  },
];

/**
 * =========================================================================
 * CREATIVE MEDIA GALLERY
 * Showcase for video editing, livestreaming work, graphic design, and posters.
 * =========================================================================
 */
export const creativeMediaData: CreativeMediaItem[] = [
  {
    id: 'media-revival-poster',
    title: 'Revival 2026 Youth Conference Poster',
    category: 'Graphic Design',
    description:
      'High-impact event promotional poster created for an annual regional youth conference, featuring modern neon typography and electric gradients.',
    image: '/images/creative-poster.jpg',
    aspectRatio: 'portrait',
    clientOrContext: 'Youth Ministry & Event Promotions',
    toolsUsed: ['Adobe Photoshop', 'Canva Pro', 'Typography Design'],
    externalLink: '#contact',
  },
  {
    id: 'media-livestream-broadcast',
    title: 'Sunday Worship Multi-Camera Livestream',
    category: 'Livestream Production',
    description:
      'Full technical setup and execution of a multi-camera live broadcast featuring live band audio balancing, lower-thirds, and broadcast switching.',
    image: '/images/church-media.jpg',
    aspectRatio: 'landscape',
    clientOrContext: 'Weekly Congregation Broadcast (YouTube Live)',
    toolsUsed: ['OBS Studio', 'vMix', 'Audio Interface', 'PTZ Cameras'],
    videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Configurable embed
  },
  {
    id: 'media-video-editing-suite',
    title: 'Sermon Recap & Short-Form Video Editing',
    category: 'Video Editing',
    description:
      'Multi-track video and audio editing with dynamic captions, color grading, sound enhancement, and optimized pacing for social media platforms.',
    image: '/images/video-editing.jpg',
    aspectRatio: 'landscape',
    clientOrContext: 'Digital Outreach & Social Media Series',
    toolsUsed: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Audacity'],
    videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'media-brand-identity',
    title: 'Blessing Technologies Brand Identity Suite',
    category: 'Brand Identity',
    description:
      'Cohesive visual identity incorporating dark navy glassmorphic elements, vibrant cyan-purple accents, and the "Building Tech. Building Legacy." slogan.',
    image: '/images/blessing-tech.jpg',
    aspectRatio: 'landscape',
    clientOrContext: 'Blessing Technologies Digital Presence',
    toolsUsed: ['Figma', 'Vector Graphic Design', 'Design Systems'],
    externalLink: '#home',
  },
];

/**
 * =========================================================================
 * BLOG & TECHNICAL WRITING ARTICLES
 * Manageable articles about software engineering, backend logic, and media.
 * =========================================================================
 */
export const blogPostsData: BlogPost[] = [
  {
    id: 'post-offline-first-systems',
    slug: 'architecting-offline-first-desktop-software',
    title: 'Architecting Offline-First Desktop Software: Lessons from School Systems in Uganda',
    excerpt:
      'Why reliable offline architecture and deterministic local database synchronization are critical when building software for emerging economies.',
    publishDate: 'October 15, 2026',
    readTime: '6 min read',
    category: 'Software Engineering',
    tags: ['Architecture', 'SQLite', 'Offline-First', 'Desktop'],
    content: [
      'In many discussions about modern web development, continuous high-speed internet connectivity is taken for granted. However, building software in Kampala and across East Africa quickly teaches you that offline resilience is not an edge case—it is a foundational requirement.',
      'When designing the Wellspring School Management System, the primary architectural challenge was ensuring that bursars could record tuition installments, generate verifiable printable receipts, and inspect student ledgers without depending on an active internet connection.',
      'Key Architectural Decisions:',
      '1. Local-First SQLite Storage: Keeping the primary transactional state on the client machine guarantees sub-millisecond response times and zero downtime during network outages.',
      '2. Atomic Ledger Transactions: Financial records must adhere strictly to ACID principles. When a receipt is generated, both the student payment ledger and the cash-in-hand table are updated atomically within a single SQL transaction.',
      '3. Conflict-Free Sync Preparation: By timestamping each transaction with UTC and assigning unique cryptographic GUIDs, the system prepares for asynchronous server synchronization whenever an uplink becomes available.',
      'Building tech that solves actual regional problems requires looking past the latest transient hype and focusing on rock-solid, dependable engineering.',
    ],
  },
  {
    id: 'post-backend-logic-integrity',
    slug: 'why-backend-logic-and-database-integrity-matter',
    title: 'Why Backend Logic and Database Integrity Matter More Than Ever',
    excerpt:
      'A deep dive into why robust server-side validation, relational foreign keys, and clean API design are the true backbone of useful software.',
    publishDate: 'September 28, 2026',
    readTime: '5 min read',
    category: 'Backend Development',
    tags: ['Backend', 'Python', 'Databases', 'API Design'],
    content: [
      'Beautiful user interfaces attract users, but backend integrity is what keeps applications alive. As a software engineering student diving deep into Python, Django, PHP, and relational databases, the importance of defensive programming has become unmistakable.',
      'Never Trust the Client: Frontend validation exists for user experience; backend validation exists for survival. Any request received at an API endpoint can be altered, intercepted, or replayed. Validating schemas, sanitize inputs, and enforcing authorization at the controller level is non-negotiable.',
      'The Value of Relational Constraints: Foreign key constraints, CASCADE policies, and unique indexes in MySQL and PostgreSQL are not bureaucratic overhead. They are the mathematical guardrails that prevent corrupted data and ghost references.',
      'Building with Django and Python has reinforced the beauty of clean model definitions and modular services. When the data layer is sound, building features becomes an enjoyable, predictable process.',
    ],
  },
  {
    id: 'post-livestream-production-guide',
    slug: 'the-art-of-live-church-production-on-a-practical-budget',
    title: 'The Art of Live Production: Running High-Quality Church Livestreams on a Practical Budget',
    excerpt:
      'Practical techniques for multi-camera switching, clean audio gain staging, and OBS encoder optimization without needing six-figure studio gear.',
    publishDate: 'August 14, 2026',
    readTime: '7 min read',
    category: 'Creative Media',
    tags: ['Livestreaming', 'OBS Studio', 'Audio Engineering', 'Church Media'],
    content: [
      'Running church media and live broadcasts has been one of the most rewarding creative challenges in my journey. Broadcast environments present zero margin for error: once a sermon begins, you cannot hit "pause" to fix a misrouted audio channel or a dropped frame.',
      'Crucial Insights for Practical Live Streaming:',
      '1. Audio Is 70% of Video Quality: Viewers will tolerate a 720p video stream with crystal-clear audio, but they will immediately leave a 4K stream with buzzing, clipped, or muffled microphones. Always use dedicated auxiliary mixer outputs and calibrate your limiter in OBS.',
      '2. Hardware Encoder Headroom: Always leave at least 20% CPU/GPU headroom on your broadcast PC. Pushing an encoder to 95% utilization will inevitably lead to dropped frames during sudden scene transitions.',
      '3. Clear Visual Pacing: Switch camera angles purposefully. Wide shots for praise and transition moments; tighter framing for the speaker during intimate sermon delivery.',
      'Blending software technicality with live human storytelling is where the real magic happens.',
    ],
  },
];

/**
 * =========================================================================
 * TESTIMONIALS & ENDORSEMENTS
 * Clearly labeled as placeholder endorsements for development purposes.
 * =========================================================================
 */
export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-academic-mentor',
    name: 'Academic Project Supervisor',
    role: 'Senior Lecturer, Computing Department',
    organization: 'Software Engineering Faculty',
    relationship: 'Academic Supervision',
    quote:
      'Mwanje demonstrates a remarkable passion for backend architecture and systems programming. His focus on understanding how databases handle real-world transactions sets him apart as an aspiring engineer with immense promise.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    isPlaceholder: true,
  },
  {
    id: 'test-ministry-director',
    name: 'Ministry Media Director',
    role: 'Communications & Media Coordinator',
    organization: 'Faith Community Worship Team',
    relationship: 'Media & Production Colleague',
    quote:
      'Blessing has been dependable in running our weekly livestream broadcast and producing vibrant promotional media. He brings both technical calm under live pressure and an artistic eye for high-impact visual design.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    isPlaceholder: true,
  },
  {
    id: 'test-client-collaborator',
    name: 'Freelance Collaboration Partner',
    role: 'Lead Digital Strategist',
    organization: 'Digital Solutions Studio',
    relationship: 'Collaborative Project Partner',
    quote:
      'Working with Mwanje Blessing is always a smooth experience. He delivers on time, communicates proactively, and takes genuine ownership over code quality and digital presentation.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    isPlaceholder: true,
  },
];
