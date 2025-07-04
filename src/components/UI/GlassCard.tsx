import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = '', hover = true }: GlassCardProps) => {
  return (
    <motion.div
      className={`
        relative
        bg-white/25 dark:bg-slate-900/25 
        backdrop-blur-xl 
        border border-white/30 dark:border-slate-700/30 
        rounded-3xl 
        shadow-2xl
        transition-all duration-500
        ${hover ? 'hover:shadow-3xl hover:bg-white/35 dark:hover:bg-slate-900/35' : ''}
        ${className}
      `}
      whileHover={hover ? { 
        y: -8,
        scale: 1.02,
        rotateX: 2,
        rotateY: 2
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        duration: 0.4
      }}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.25),
          0 0 0 1px rgba(255, 255, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `
      }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      {/* Inner Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      
      {/* Content Container with Forced Text Colors */}
      <div className="relative z-10">
        <div className="[&_h1]:!text-slate-900 [&_h1]:dark:!text-white [&_h2]:!text-slate-900 [&_h2]:dark:!text-white [&_h3]:!text-slate-900 [&_h3]:dark:!text-white [&_h4]:!text-slate-900 [&_h4]:dark:!text-white [&_h5]:!text-slate-900 [&_h5]:dark:!text-white [&_h6]:!text-slate-900 [&_h6]:dark:!text-white [&_p]:!text-slate-600 [&_p]:dark:!text-slate-300 [&_span]:!text-slate-600 [&_span]:dark:!text-slate-300">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default GlassCard;