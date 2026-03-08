export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    id: 'web-development',
    icon: '💻',
    title: 'Web Development',
    description: 'Build modern, responsive web applications using cutting-edge technologies and best practices. From concept to deployment, I create digital experiences that users love.',
    features: [
      'React & Next.js applications',
      'Responsive design',
      'Performance optimization',
      'SEO friendly',
      'Cross-browser compatible'
    ]
  },
  {
    id: 'backend-api',
    icon: '⚙️',
    title: 'Backend & APIs',
    description: 'Develop robust and scalable backend solutions with Node.js and modern frameworks. RESTful APIs, real-time applications, and database design tailored to your needs.',
    features: [
      'RESTful API design',
      'Database architecture',
      'Authentication & security',
      'Real-time solutions',
      'Microservices'
    ]
  },
  {
    id: 'ui-ux',
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Craft beautiful and intuitive user interfaces combined with exceptional user experience. I translate designs into interactive, functional web applications.',
    features: [
      'User interface design',
      'Prototyping',
      'Animation & interactions',
      'Accessibility (a11y)',
      'Design systems'
    ]
  },
  {
    id: 'devops',
    icon: '🚀',
    title: 'DevOps & Deployment',
    description: 'Streamline your development workflow with modern DevOps practices. Deployment automation, continuous integration, and infrastructure management on cloud platforms.',
    features: [
      'Docker & containerization',
      'CI/CD pipelines',
      'Cloud deployment',
      'Performance monitoring',
      'Database management'
    ]
  }
];
