export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'education' | 'internship' | 'certification';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId: string;
}

export interface ProfessionalSkill {
  name: string;
  level: number;
  category: 'soft' | 'technical';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}