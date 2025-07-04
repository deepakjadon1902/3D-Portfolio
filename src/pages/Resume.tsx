import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail, Award, Briefcase, GraduationCap, Star, Code, Users } from 'lucide-react';
import { experiences, skills, certificates, professionalSkills } from '../data/experience';
import GlassCard from '../components/UI/GlassCard';
import Button from '../components/UI/Button';

const Resume = () => {
  const downloadResume = () => {
    // Create a comprehensive resume
    const resumeContent = `
DEEPAK JADON
Full-Stack Developer | React & TypeScript Expert | Node.js Enthusiast

CONTACT INFORMATION
Phone: +91 91493 70081
Email: deepakjadon1907@gmail.com
Location: GLA University, Mathura
GitHub: github.com/deepakjadon1902
LinkedIn: linkedin.com/in/deepak-jadon-612487272
Portfolio: https://deft-unicorn-994fcc.netlify.app

EDUCATION
Bachelor of Technology - Computer Science
GLA University, Mathura (2022 - 2026)
Current CGPA: 7.44/10

💼 EXPERIENCE
Web Developer Intern
BrajMart Private Limited – Mathura, India
May 2025 – Present

Built and maintained core features for a social media engagement platform using Node.js, Nodemon, and MongoDB Atlas, enabling users to purchase engagement services across platforms like Instagram, Facebook, and X (Twitter).

Integrated secure login/logout APIs and implemented dynamic product listing UI using React and Tailwind CSS.

Optimized frontend performance and ensured seamless user experience across all devices, including mobile and desktop.

Frontend Developer Intern
Forelsket Private Limited
June 2025 – Present

Developed interactive and mobile-first user interfaces using React, TypeScript, and Tailwind CSS.

Collaborated with designers and backend developers to implement modern design systems and ensured UI consistency.

Worked on enhancing application performance and reducing load time through best frontend practices.

TECHNICAL SKILLS
Frontend: React (95%), TypeScript (90%), Tailwind CSS (90%), Vite (85%), Next.js (80%)
Backend: Node.js (85%), Express (80%), Flask (75%), REST APIs (85%)
Database: MongoDB (85%), Supabase (80%), PostgreSQL (75%)
Tools: GitHub (90%), Netlify (85%), Vercel (85%), Docker (70%)

CERTIFICATIONS
- Web Development Certification - IIT Bombay (March 2024)
- React & TypeScript Specialization - IIT Delhi (January 2024)
- Backend Development with Node.js - IIT Madras (November 2023)
- MongoDB Database Administration - MongoDB University (September 2023)
- Cloud Computing Fundamentals - AWS Academy (August 2023)

PROJECTS
1. My DriveMate - Full-stack ride-sharing platform with real-time GPS tracking
2. EventFlow Pro - Event management system with ticket booking and analytics
3. DriveEase AI - Smart driving assistant with AI-powered features
4. NagrikSahayak Digital - Government service portal with blockchain verification
5. WeatherScope Pro - Weather intelligence platform with 15-day forecasts
6. TaskFlow Enterprise - Collaborative task management with Kanban boards
7. FitLife Challenge Hub - Fitness ecosystem with AI recommendations
8. LingoSwift AI Tutor - Language learning platform with speech recognition
9. EduTrack Analytics - Academic management with predictive analytics
10. Timeless Touch - PicSync 3D - Immersive 3D photo gallery

PROFESSIONAL SKILLS
Problem Solving (95%), Team Collaboration (90%), Time Management (90%), 
Adaptability (92%), Communication (85%), Project Management (85%)

ACHIEVEMENTS
- Maintained 7.44/10 CGPA throughout academic career
- Completed multiple prestigious certifications from IITs
- Built 10+ production-ready full-stack applications
- Active contributor to open-source projects
- Mentored junior developers in web development
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Deepak_Jadon_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      case 'internship':
        return <Briefcase className="h-5 w-5" />;
      case 'certification':
        return <Award className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'internship':
        return 'bg-green-500';
      case 'certification':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Resume
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Full-Stack Developer | React & TypeScript Expert | Node.js Enthusiast
          </p>
          <Button onClick={downloadResume}>
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <GlassCard className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">+91 91493 70081</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">deepakjadon1907@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300">GLA University, Mathura</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Academic Performance
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">Current CGPA</span>
                    <span className="text-2xl font-bold text-blue-600">7.44/10</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full" style={{ width: '74.4%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Experience Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="relative mb-8"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full ${getTypeColor(exp.type)} border-4 border-white dark:border-slate-900 z-10`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xs">
                    {getIcon(exp.type)}
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-16">
                  <GlassCard className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                      {exp.description}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                        {cert.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {cert.date}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['frontend', 'backend', 'database', 'tools'].map((category) => (
              <GlassCard key={category} className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
                    {category} Skills
                  </h3>
                </div>
                <div className="space-y-4">
                  {skills.filter(skill => skill.category === category).map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Professional Skills
          </h2>
          <GlassCard className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Soft Skills & Leadership
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 dark:text-green-400 font-semibold">{skill.level}%</span>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;