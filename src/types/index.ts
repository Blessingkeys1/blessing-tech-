export interface ProfileInfo {
  name: string;
  title: string;
  brand: string;
  slogan: string;
  location: string;
  availability: string;
  objective: string;
  headline: string;
  subheadline: string;
  supportingText: string;
  educationSummary: string;
  interests: {
    technical: string[];
    creative: string[];
    administrative: string[];
  };
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    location: string;
    github: string;
    linkedin: string;
    upwork: string;
    youtube: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface SkillItem {
  name: string;
  proficiency: string; // e.g. "Practical Knowledge", "Intermediate", "Developing"
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
  color: string;
}

export type ProjectCategory = 'All' | 'Web Development' | 'Software Systems' | 'Mobile Applications' | 'Creative Media';
export type ProjectStatus = 'Completed' | 'In Progress' | 'Concept';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Web Development' | 'Software Systems' | 'Mobile Applications' | 'Creative Media';
  status: ProjectStatus;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl?: string | null;
  demoUrl?: string | null;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  institution: string;
  location: string;
  type: 'education' | 'experience' | 'project';
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface CreativeMediaItem {
  id: string;
  title: string;
  category: 'Video Editing' | 'Livestream Production' | 'Graphic Design' | 'Brand Identity';
  description: string;
  image: string;
  aspectRatio?: 'landscape' | 'portrait';
  clientOrContext: string;
  toolsUsed: string[];
  videoEmbedUrl?: string;
  externalLink?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatar: string;
  isPlaceholder: boolean;
  relationship: string;
}
