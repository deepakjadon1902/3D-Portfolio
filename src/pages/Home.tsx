import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Code, Zap, Users, Sparkles, Rocket, Target, Download } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import Button from '../components/UI/Button';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a downloadable resume
    const resumeContent = `
DEEPAK JADON
Full-Stack Developer

Contact Information:
Phone: +91 91493 70081
Email: deepakjadon1907@gmail.com
Location: GLA University, Mathura

Education:
Bachelor of Technology - Computer Science
GLA University, Mathura (2022 - 2026)
Current CGPA: 7.44/10

Skills:
Frontend: React, TypeScript, Tailwind CSS, Vite
Backend: Node.js, Express, Flask
Database: MongoDB, Supabase
Tools: GitHub, Netlify, Vercel

Experience:
- Full-Stack Development Internship at Tech Innovations Pvt Ltd (June 2024 - August 2024)
- Web Development Certification from IIT Bombay (March 2024)
- React & TypeScript Specialization from IIT Delhi (January 2024)
- Backend Development with Node.js from IIT Madras (November 2023)

Projects:
1. My DriveMate - Full-stack ride-sharing platform
2. EventFlow Pro - Event management system
3. DriveEase AI - Smart driving assistant
4. NagrikSahayak Digital - Government service portal
5. WeatherScope Pro - Weather intelligence platform
6. TaskFlow Enterprise - Task management platform
7. FitLife Challenge Hub - Fitness ecosystem
8. LingoSwift AI Tutor - Language learning platform
9. EduTrack Analytics - Academic management system
10. Timeless Touch - PicSync 3D - 3D photo gallery

GitHub: github.com/deepakjadon1902
LinkedIn: linkedin.com/in/deepak-jadon-612487272
Portfolio: https://deft-unicorn-994fcc.netlify.app
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

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Enhanced 3D Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0],
              scale: [1, 0.95, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 15, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-900 dark:to-blue-900 rounded-full opacity-15 blur-lg"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Enhanced 3D Profile */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
              className="w-40 h-40 mx-auto mb-8 relative perspective-1000"
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 10, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="h-20 w-20 text-white" />
                </motion.div>
              </motion.div>
              
              {/* 3D Ring Animation */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-blue-400/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-purple-400/20 rounded-full"
              />
            </motion.div>

            {/* Enhanced Name Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6"
              style={{
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
              }}
            >
              Deepak Jadon
            </motion.h1>

            {/* Enhanced Typewriter with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 h-20 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotateX: [0, 5, 0],
                  y: [0, -2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
              >
                <TypeAnimation
                  sequence={[
  'Full-Stack Developer 🚀',
  2000,
  'React & TypeScript Developer ⚛️',
  2000,
  'Node.js & MongoDB Wizard 🔮',
  2000,
  'UI/UX Designer with a Creative Edge 🎨',
  2000,
  'Tailwind CSS + Vite Architect 💡',
  2000,
  'Supabase & REST API Integrator 🔗',
  2000,
  'Responsive Web Experience Crafter 📱',
  2000,
  'Clean Code & Debugging Enthusiast 🛠️',
  2000,
  'Tech-Driven Visionary 💻',
  2000,
  'Portfolio That Speaks for Itself ✨',
  2000
]}

                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Social Links with 3D Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center space-x-6 mb-12"
            >
              {[
                { icon: Github, href: "https://github.com/deepakjadon1902", color: "from-slate-700 to-slate-900" },
                { icon: Linkedin, href: "https://linkedin.com/in/deepak-jadon-612487272", color: "from-blue-600 to-blue-800" },
                { icon: Mail, href: "mailto:deepakjadon1907@gmail.com", color: "from-red-500 to-red-700" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gradient-to-br ${social.color} text-white rounded-xl shadow-lg transform-gpu`}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    rotateX: 10,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <social.icon className="h-7 w-7" />
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" onClick={scrollToAbout} className="group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Explore My Journey
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg" onClick={downloadResume} className="group border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Discover More</span>
            <motion.div
              className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-slate-600 dark:bg-slate-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
              whileInView={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: 'linear-gradient(90deg, #1e293b, #3b82f6, #8b5cf6, #1e293b)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
            >
              I'm a passionate Full-Stack Developer pursuing my B.Tech in Computer Science at GLA University. 
              I specialize in creating innovative digital experiences that seamlessly blend cutting-edge technology 
              with intuitive design, transforming complex problems into elegant solutions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                description: "To create innovative web solutions that solve real-world problems and deliver exceptional user experiences through cutting-edge technology and thoughtful design.",
                color: "from-blue-500 to-cyan-500",
                delay: 0.2
              },
              {
                icon: Zap,
                title: "Expertise",
                description: "Expert in React, TypeScript, Node.js, MongoDB, and modern web technologies with a focus on performance optimization and scalable architecture.",
                color: "from-purple-500 to-pink-500",
                delay: 0.4
              },
              {
                icon: Rocket,
                title: "Vision",
                description: "Building a career in full-stack development while contributing to open-source projects, mentoring aspiring developers, and pushing the boundaries of web technology.",
                color: "from-green-500 to-emerald-500",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: item.delay, duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <GlassCard className="p-8 text-center h-full relative overflow-hidden group">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;