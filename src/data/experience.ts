import { Experience, Skill, Certificate, ProfessionalSkill } from '../types';

export const experiences: Experience[] = [
  {
    title: 'Bachelor of Technology (B.Tech) - Computer Science',
  company: 'GLA University, Mathura, India',
  period: 'July 2022 – May 2026',
  description: 'CGPA: 7.44/10. Completed coursework in Operating Systems, Database Management Systems, Computer Networks, Machine Learning, Web Development, and Cloud Computing.',
  type: 'education'
  },
  {
  title: 'Web Developer Intern',
  company: 'BrajMart Private Limited',
  period: 'May 2025 – Present',
  description: 'Built and maintained core features for a social media engagement platform using Node.js, Nodemon, and MongoDB Atlas. Integrated secure login/logout APIs and implemented product listing UI using React and Tailwind CSS. Optimized frontend performance and ensured seamless user experience across all devices.',
  type: 'internship'
},
{
  title: 'Frontend Developer Intern',
  company: 'Forelsket Private Limited',
  period: 'June 2025 – Present',
  description: 'Developed interactive and mobile-first user interfaces using React, TypeScript, and Tailwind CSS. Collaborated with designers and backend developers to implement modern design systems and ensure UI consistency. Worked on improving application performance and reducing load times through frontend optimization.',
  type: 'internship'
}

];

export const certificates: Certificate[] = [
  {
    title: 'Introduction to Environmental Engineering and Science',
    issuer: 'IIT Kharagpur',
    date: 'November 2024',
    description: 'Completed a foundational course on environmental systems and engineering principles to promote sustainable development and responsible engineering practices.',
    credentialId: 'IIT-KGP-ENV-2024-001'
  },
  {
    title: 'Ethics in Engineering Practices',
    issuer: 'IIT Kharagpur',
    date: 'November 2023',
    description: 'Explored ethical frameworks, professional responsibilities, and real-world case studies to promote integrity and accountability in engineering.',
    credentialId: 'IIT-KGP-ETH-2023-002'
  },
  {
    title: 'E-Business',
    issuer: 'IIT Kharagpur',
    date: 'November 2024',
    description: 'Explored the foundations of e-business, including digital strategy, online business models, and IT infrastructure for e-commerce platforms.',
    credentialId: 'IIT-KGP-EBIZ-2024-003'
  },
  {
    title: 'Organizational Behaviour: Individual Dynamics in Organization',
    issuer: 'IIT Guwahati',
    date: 'May 2025',
    description: 'Studied the impact of individual behavior on organizational outcomes, including leadership, decision-making, and motivation.',
    credentialId: 'IIT-GHY-OB-2025-004'
  },
  {
    title: 'Leadership and Team Effectiveness',
    issuer: 'IIT Guwahati',
    date: 'May 2025',
    description: 'Focused on leadership development, team-building strategies, and collaborative problem-solving in a dynamic workplace.',
    credentialId: 'IIT-GHY-LT-2025-005'
  }
];


export const skills: Skill[] = [
  // Frontend Development
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'HTML5', level: 90, category: 'frontend' },
  { name: 'CSS3', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Responsive Design', level: 92, category: 'frontend' },
  { name: 'Vite', level: 85, category: 'frontend' },
  { name: 'EmailJS', level: 80, category: 'frontend' },

  // Backend Development
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Nodemon', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'Flask', level: 75, category: 'backend' },
  { name: 'API Integration', level: 85, category: 'backend' },
  { name: 'Authentication Systems', level: 80, category: 'backend' },

  // Databases
 { name: 'MongoDB', level: 85, category: 'database' },
  { name: 'MongoDB Atlas', level: 85, category: 'database' },
  { name: 'Supabase', level: 80, category: 'database' },

  // Tools
  { name: 'GitHub', level: 90, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'Netlify', level: 85, category: 'tools' },
  { name: 'Vercel', level: 85, category: 'tools' }
];


export const professionalSkills: ProfessionalSkill[] = [
  { name: 'Agile Workflow', level: 90, category: 'soft' },
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Team Collaboration', level: 90, category: 'soft' },
  { name: 'Version Control', level: 88, category: 'soft' },
  { name: 'Time Management', level: 90, category: 'soft' }
];