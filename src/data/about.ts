export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Solutions Inc',
    position: 'Senior Frontend Developer',
    duration: '2022 - Present',
    startDate: '2022-01',
    endDate: 'present',
    description: 'Leading frontend development for large-scale web applications. Mentoring junior developers and implementing modern architecture patterns.',
    achievements: [
      'Led migration to React hooks, improving code performance by 40%',
      'Implemented micro-frontend architecture reducing build time by 60%',
      'Mentored 5+ junior developers on best practices and code standards',
      'Designed and implemented design system used across 3 major products'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Redux', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    company: 'Digital Innovations Ltd',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    startDate: '2020-06',
    endDate: '2022-12',
    description: 'Developed full-stack web applications from concept to deployment. Responsible for both frontend and backend development.',
    achievements: [
      'Built 12+ production web applications serving 100K+ users',
      'Optimized database queries reducing load time by 50%',
      'Implemented CI/CD pipeline reducing deployment time from 2h to 15m',
      'Decreased frontend bundle size by 35% through code splitting'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'Docker']
  },
  {
    id: 'exp-3',
    company: 'StartUp Hub',
    position: 'Junior Developer',
    duration: '2019 - 2020',
    startDate: '2019-02',
    endDate: '2020-05',
    description: 'Started career developing web components and learning modern web technologies. Contributed to several startup projects.',
    achievements: [
      'Developed 5 client-facing web applications',
      'Fixed 200+ bugs and improved code quality',
      'Participated in daily standups and sprint planning',
      'Learned agile development methodology'
    ],
    techStack: ['JavaScript', 'HTML/CSS', 'React', 'Node.js']
  }
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  description?: string;
}

export const educationData: Education[] = [
  {
    id: 'edu-1',
    institution: 'State University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    year: '2019',
    description: 'Graduated with honors. Focus on software engineering and web technologies.'
  },
  {
    id: 'cert-1',
    institution: 'Coursera',
    degree: 'Professional Certificate',
    field: 'The Complete JavaScript Course',
    year: '2019',
    description: 'Comprehensive JavaScript course covering ES6+, async programming, and modern frameworks.'
  },
  {
    id: 'cert-2',
    institution: 'Udemy',
    degree: 'Course Certificate',
    field: 'Complete React Developer Course',
    year: '2020',
    description: 'Advanced React patterns, hooks, context API, and state management.'
  },
  {
    id: 'cert-3',
    institution: 'freeCodeCamp',
    degree: 'Course Certificate',
    field: 'Full Stack Web Development',
    year: '2021',
    description: 'Complete full-stack development course covering frontend and backend technologies.'
  }
];

export interface PersonalInterest {
  id: string;
  title: string;
  emoji: string;
  description: string;
}

export const personalInterests: PersonalInterest[] = [
  {
    id: 'hobby-1',
    title: 'Open Source',
    emoji: '🔓',
    description: 'Active contributor to open source projects. Love helping the community grow.'
  },
  {
    id: 'hobby-2',
    title: 'Gaming',
    emoji: '🎮',
    description: 'Passionate gamer. Enjoy strategy games and sometimes stream on Twitch.'
  },
  {
    id: 'hobby-3',
    title: 'Photography',
    emoji: '📸',
    description: 'Capture moments through photography. Love landscape and street photography.'
  },
  {
    id: 'hobby-4',
    title: 'Reading',
    emoji: '📚',
    description: 'Read books about technology, business, and personal development regularly.'
  },
  {
    id: 'hobby-5',
    title: 'Travel',
    emoji: '✈️',
    description: 'Explore new places and cultures. Worked remotely from 10+ countries.'
  },
  {
    id: 'hobby-6',
    title: 'Music',
    emoji: '🎵',
    description: 'Music enthusiast. Play guitar in free time and enjoy various genres.'
  }
];
