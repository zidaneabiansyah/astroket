export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'Full-featured online store with payment integration',
    description: 'A complete e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, user authentication, payment processing with Stripe, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956600684-38aa21ebc89f?w=800&h=600&fit=crop',
    category: 'Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/user/ecommerce-platform',
    featured: true
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    shortDescription: 'Collaborative task management with real-time updates',
    description: 'A real-time task management application with collaborative features. Built with React, Firebase, and designed for team productivity with drag-and-drop functionality.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    category: 'Web',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/user/task-management',
    featured: true
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    shortDescription: 'Real-time weather data with beautiful visualizations',
    description: 'A weather application that displays real-time weather data with beautiful animations and visualizations. Uses OpenWeather API and provides hourly and weekly forecasts.',
    image: 'https://images.unsplash.com/photo-1559789814-dcc1cbb05束f18?w=800&h=600&fit=crop',
    category: 'Web',
    technologies: ['React', 'OpenWeather API', 'GSAP', 'CSS'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/user/weather-app',
    featured: true
  },
  {
    id: 'api-dashboard',
    title: 'REST API Dashboard',
    shortDescription: 'Analytics dashboard for API monitoring',
    description: 'A comprehensive API monitoring dashboard. Shows real-time metrics, request/response times, error tracking, and user analytics. Built with Next.js and Chart.js.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Web',
    technologies: ['Next.js', 'Chart.js', 'PostgreSQL', 'Express', 'TypeScript'],
    liveUrl: 'https://example-dashboard.com',
    githubUrl: 'https://github.com/user/api-dashboard',
    featured: true
  },
  {
    id: 'mobile-app',
    title: 'Fitness Tracking App',
    shortDescription: 'Native mobile app for fitness tracking and goals',
    description: 'A cross-platform fitness tracking application built with React Native and Firebase. Tracks workouts, calories, and progress towards fitness goals.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    category: 'Mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'NodeJS'],
    liveUrl: 'https://example-fitness.com',
    githubUrl: 'https://github.com/user/fitness-app',
    featured: false
  },
  {
    id: 'social-network',
    title: 'Social Network Platform',
    shortDescription: 'Social media platform with messaging and communities',
    description: 'A full-featured social network with user profiles, messaging, communities, and feed algorithms. Built with MERN stack.',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=600&fit=crop',
    category: 'Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
    liveUrl: '#',
    githubUrl: 'https://github.com/user/social-network',
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectByCategory = (category: string) => projects.filter(p => p.category === category);
