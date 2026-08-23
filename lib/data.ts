export const profile = {
  name: 'Mehzabin Haque',
  title: 'M.S. Student in Software Engineering',
  subtitle: 'HCI & Accessibility Researcher',
  affiliation: 'Institute of Information Technology, University of Dhaka',
  email: 'bsse1233@iit.du.ac.bd',
  phone: '+880 1894636853',
  location: 'Dhaka, Bangladesh',
  linkedin: 'https://www.linkedin.com/in/mehzabin-haque/',
  github: 'https://github.com/mehzabin-haque',
  scholar: 'https://scholar.google.com/citations?user=Mb549x0AAAAJ&hl=en',
  cv:"https://drive.google.com/file/d/1NDnkNgIj5e8fi1dVnOavwgMZPgYAccRT/view?usp=drive_link",
  about:
    "I'm an M.S. student in Software Engineering at the Institute of Information Technology, University of Dhaka, researching Human-Computer Interaction, accessibility, and Responsible AI. I currently work with the University of Louisiana at Lafayette on inclusive, human-centered technologies, and previously contributed to Microsoft-funded research on Bangladesh's AI readiness at the University of Toronto. I'm a co-author on papers at ACM CHI and ACM COMPASS.",
};

export const quickLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Google Scholar', href: profile.scholar },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'CV', href: profile.cv },
];

export const NAV_ITEMS: { href: string; label: string }[] = [
  { href: '/', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  // { href: '/contact', label: 'Contact' },
];

export const highlights = [
  { when: '2026', text: 'Started M.S. in Software Engineering at IIT, University of Dhaka.' },
  { when: '2026', text: 'Co-authored two papers accepted at ACM CHI EA and ACM COMPASS.' },
  { when: '2026', text: 'Completed Microsoft-funded research on Bangladesh’s AI readiness at the University of Toronto.' },
  { when: '2025', text: 'Started as a Lecturer in Software Engineering at Daffodil International University.' },
  { when: '2025', text: 'Completed my BSSE degree.' },
  { when: '2024', text: 'Co-authored a paper accepted at IEEE ICSME 2024.' },
  { when: '2024', text: 'Completed a2i internship, contributing to accessibility and usability improvements in public-facing digital services.' },
  { when: '2023', text: 'Completed UIUC+ Summer Research Internship, conducting research on testing code translation via language interoperability.' },
  { when: '2023', text: 'Won ITVerse 2.0 Hackathon (Blockchain Category) and ITVerse UI/UX Explorer Contest.' },
  { when: '2023', text: 'Finalist in Blockchain Olympiad Bangladesh (BCOLBD) and 1st Runner-Up in TechTales Contest.' },
];

export const experiences = [
  {
    position: 'Researcher, HCI & Accessibility',
    organization: 'University of Louisiana at Lafayette (Remote) — Supervisor: Dr. Tamanna Motahar',
    duration: '2026 – Present',
    description: [
      'Conducting research at the intersection of Human–Computer Interaction and accessibility, with an emphasis on inclusive and human-centered technologies.',
      'Contributing to literature synthesis, research design, analysis, and preparation of scholarly outputs.',
    ],
  },
  {
    position: 'Lecturer, Software Engineering',
    organization: 'Daffodil International University',
    duration: 'May 2025 – Aug 2025',
    description: [
      'Designed and delivered laboratory exercises using practical datasets and real-world computing applications for Computer Fundamentals, Machine Learning Driven Data Analysis II, and Statistical Analysis Lab.',
      'Mentored undergraduate students in coursework, research activities, and final-year projects.',
      'Incorporated applied computing, data analysis, and responsible technology concepts into classroom and laboratory instruction.',
    ],
  },
  {
    position: 'Research Assistant, Microsoft-Funded Research',
    organization: 'University of Toronto (Remote) — Supervisor: Dr. Syed Ishtiaque Ahmed',
    duration: 'Jul 2024 – Jun 2026',
    description: [
      "Investigated Bangladesh's AI readiness through analysis of national AI policy, Responsible AI frameworks, and stakeholder perspectives.",
      'Contributed to REAPS, an automated platform for semantic analysis and benchmarking of national AI policies.',
      'Contributed to the AI Maturity Assessment Tool (AIMAT) for evaluating Responsible AI readiness in Bangladeshi software organizations.',
      'Conducted expert interviews and contributed to policy similarity analysis, qualitative synthesis, and interactive visualization of research findings.',
      'Co-authored research published at ACM CHI 2026 and ACM COMPASS 2026.',
    ],
  },
  {
    position: 'Software Engineer Intern',
    organization: 'a2i – Aspire to Innovate',
    duration: 'Jan 2024 – Jun 2024',
    description: [
      'Developed and maintained software modules within the ekShop Network ecosystem.',
      'Contributed to improvements in accessibility, usability, and scalability of public-facing digital services.',
    ],
  },
  {
    position: 'Summer Research Intern',
    organization: 'University of Illinois Urbana–Champaign (UIUC+)',
    duration: 'Jun 2023 – Jan 2024',
    description: [
      'Participated in the UIUC+ Undergraduate Research in Software Engineering program under Prof. Darko Marinov.',
      'Conducted research on testing code translation through language interoperability.',
      'Co-authored “GlueTest: Testing Code Translation via Language Interoperability,” later accepted at IEEE ICSME 2024.',
    ],
  },
];

export const skills = [
  { category: 'AI & Responsible AI', items: ['Generative AI (GenAI)', 'Large Language Models (LLMs)', 'Responsible AI (RAI) Frameworks', 'AI Policy Analysis'] },
  { category: 'Programming Languages', items: ['TypeScript', 'Java', 'Python', 'C', 'C++'] },
  { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'] },
  { category: 'Mobile Development', items: ['Flutter'] },
  { category: 'Backend Development', items: ['Node.js', 'Express.js', 'FastAPI'] },
  { category: 'Database & Data Management', items: ['MongoDB', 'MySQL', 'Prisma'] },
  { category: 'Version Control & Collaboration', items: ['GitHub', 'GitLab'] },
  { category: 'UI/UX Design Tools', items: ['Figma', 'Adobe XD', 'Canva'] },
  { category: 'Project Management & Productivity Tools', items: ['Jira', 'Asana', 'Trello'] },

];

export const education = [
  {
    degree: 'Master of Science in Software Engineering (MSSE)',
    institution: 'Institute of Information Technology (IIT), University of Dhaka',
    duration: '2026 – Present',
    details: 'First Semester',
  },
  {
    degree: 'Bachelor of Science in Software Engineering (BSSE)',
    institution: 'Institute of Information Technology (IIT), University of Dhaka',
    duration: '2020 – 2025',
    details: 'CGPA: 3.84/4.00',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dhaka City College',
    duration: '2019',
    details: 'GPA: 5.00/5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Udayan Uchcha Madhyamik Bidyalaya',
    duration: '2017',
    details: 'GPA: 5.00/5.00',
  },
];

export const awards = [
  { title: 'Champion, ITVerse 2.0 Hackathon (Blockchain Category)', date: '2023' },
  { title: 'Champion, ITVerse UI/UX Explorer Contest', date: '2023' },
  { title: '1st Runner-Up, TechTales Contest', date: '2023' },
  { title: 'Finalist, Blockchain Olympiad Bangladesh (BCOLBD)', date: '2023' },
];

export const projects = [
  {
    title: 'DigiBox Cloud',
    year: '2024',
    description: 'Smart locker system for secure package pick-up with SMS/email alerts.',
    technologies: ['React', 'Laravel'],
    category: 'Professional',
  },
  {
    title: 'REAPS – AI Policy Analysis Tool',
    year: '2024',
    description:
      'Research platform for semantic analysis and benchmarking of national AI policies, supporting policy-gap identification and comparative Responsible AI assessment.',
    technologies: ['Next.js', 'Python'],
    category: 'Research',
  },
  {
    title: 'ekPass',
    year: '2024',
    description: 'Smart toll collection system enabling automated vehicle processing and frictionless digital toll payment.',
    technologies: ['FastAPI', 'React Native', 'Laravel'],
    category: 'Academic',
  },
  {
    title: 'Proof of Democracy (EtherCast)',
    year: '2023',
    description: 'Secure corporate e-voting platform incorporating blockchain technology and zero-knowledge proof techniques.',
    technologies: ['Next.js', 'Solidity', 'MongoDB', 'Prisma'],
    category: 'Academic',
  },
  {
    title: 'BUS Koi',
    year: '2023',
    description: 'Real-time bus tracking mobile application for University of Dhaka students.',
    technologies: ['Flutter', 'Firebase'],
    category: 'Academic',
  },
];

// Grouped by year, most recent first — mirrors the convention used on
// academic publication pages (e.g. ishtiaque.net/writing).
export const publicationsByYear: { year: string; items: { title: string; authors: string; venue: string; link?: string }[] }[] = [
  {
    year: '2026',
    items: [
      {
        title: "Bangladesh's AI Readiness: Perspectives from the Academia, Industry, and Government",
        authors: 'Sultana, S., Samad, R. T., Haque, M., Sultana, Z., Jahangir, Z., Hossain, B. M. M., Noman, R. M., Ahmed, S. I.',
        venue: "Extended Abstracts of the ACM CHI Conference on Human Factors in Computing Systems (CHI EA '26)",
      },
      {
        title: 'Bangladesh AI Readiness: Gaps in Curriculum, Infrastructure, and Governance',
        authors: 'Sultana, S., Samad, R. T., Haque, M., Sultana, Z., Jahangir, Z., Hossain, B. M. M., Noman, R. M., Ahmed, S. I.',
        venue: "Proceedings of the ACM Conference on Computing and Sustainable Societies (COMPASS '26)",
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'GlueTest: Testing Code Translation via Language Interoperability',
        authors:
          'Abid, M. S., Pawagi, M., Adhikari, S., Cheng, X., Badr, R., Wahiduzzaman, M., Rathi, V., Qi, R., Li, C., Liu, L., Naidu, R. S., Lin, L., Liu, Q., Palak, A. Z., Haque, M., Chen, X., Marinov, D., Dutta, S.',
        venue: 'IEEE International Conference on Software Maintenance and Evolution (ICSME 2024)',
        link: 'https://conf.researchr.org/details/icsme-2024/icsme-2024-new-ideas-and-emerging-results-track/10/GlueTest-Testing-Code-Translation-via-Language-Interoperability',
      },
    ],
  },
];

export const references = [
  { name: 'Dr. B. M. Mainul Hossain', role: 'Professor, IIT, University of Dhaka', email: 'mainul@iit.du.ac.bd' },
  { name: 'Dr. Naushin Nower', role: 'Professor, IIT, University of Dhaka', email: 'naushin@iit.du.ac.bd' },
  { name: 'Dr. Ahmedul Kabir', role: 'Associate Professor, IIT, University of Dhaka', email: 'kabir@iit.du.ac.bd' },
];
