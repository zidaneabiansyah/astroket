export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️', proficiency: 95 },
      { name: 'TypeScript', icon: '📘', proficiency: 90 },
      { name: 'Tailwind CSS', icon: '🎨', proficiency: 92 },
      { name: 'JavaScript', icon: '✨', proficiency: 95 },
      { name: 'HTML/CSS', icon: '🏗️', proficiency: 98 },
      { name: 'Vue.js', icon: '💚', proficiency: 85 },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🚀', proficiency: 93 },
      { name: 'Express', icon: '⚡', proficiency: 90 },
      { name: 'MongoDB', icon: '🍃', proficiency: 88 },
      { name: 'PostgreSQL', icon: '🐘', proficiency: 87 },
      { name: 'REST APIs', icon: '🔌', proficiency: 94 },
      { name: 'GraphQL', icon: '📊', proficiency: 80 },
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: '🔀', proficiency: 92 },
      { name: 'Docker', icon: '🐳', proficiency: 85 },
      { name: 'AWS', icon: '☁️', proficiency: 82 },
      { name: 'Figma', icon: '🎭', proficiency: 88 },
      { name: 'VS Code', icon: '💻', proficiency: 96 },
      { name: 'Webpack', icon: '📦', proficiency: 85 },
    ]
  },
  {
    category: 'Libraries & Frameworks',
    skills: [
      { name: 'Next.js', icon: '⚙️', proficiency: 91 },
      { name: 'Astro', icon: '🚀', proficiency: 88 },
      { name: 'GSAP', icon: '✨', proficiency: 87 },
      { name: 'Redux', icon: '🔴', proficiency: 89 },
      { name: 'Socket.io', icon: '🔌', proficiency: 84 },
      { name: 'Jest', icon: '🃏', proficiency: 86 },
    ]
  }
];
