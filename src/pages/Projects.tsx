import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projects';
import GlassCard from '../components/UI/GlassCard';
import Button from '../components/UI/Button';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  const scrollToProjects = () => {
    document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, #1e293b 100%)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 6s ease infinite'
            }}
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            A curated showcase of innovative full-stack applications, each crafted with cutting-edge technologies 
            and designed to solve real-world challenges through elegant digital solutions.
          </motion.p>

          {/* Scroll to Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button onClick={scrollToProjects} className="group">
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Explore Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.1 + index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              className="transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <GlassCard className="overflow-hidden group h-full relative glass-card">
                {/* Enhanced Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="primary" size="sm" className="w-full backdrop-blur-sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="secondary" size="sm" className="w-full backdrop-blur-sm">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Enhanced Project Content with Fixed Text Colors */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold !text-slate-900 dark:!text-white mb-3 hover:!text-blue-600 dark:hover:!text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="!text-slate-600 dark:!text-slate-300 mb-6 line-clamp-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="tech-tag px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-tag px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Desktop Action Buttons */}
                  <div className="flex gap-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="primary" size="sm" className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </motion.a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Button onClick={loadMoreProjects} variant="outline" size="lg">
              <Sparkles className="mr-2 h-5 w-5" />
              Load More Projects ({projects.length - visibleProjects} remaining)
            </Button>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Projects;