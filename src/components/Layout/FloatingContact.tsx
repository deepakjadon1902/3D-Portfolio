import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Call Me',
      href: 'tel:+919149370081',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'from-green-600 to-emerald-700'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email Me',
      href: 'mailto:deepakjadon1907@gmail.com',
      color: 'from-blue-500 to-cyan-600',
      hoverColor: 'from-blue-600 to-cyan-700'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Contact Form',
      href: '/contact',
      color: 'from-purple-500 to-pink-600',
      hoverColor: 'from-purple-600 to-pink-700'
    }
  ];

  const handleContactClick = (href: string) => {
    setIsExpanded(false);
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      window.location.href = href;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, x: 50, rotateY: -90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: 50, rotateY: -90 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                whileHover={{ 
                  scale: 1.05, 
                  x: -5,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {option.href.startsWith('/') ? (
                  <Link
                    to={option.href}
                    onClick={() => setIsExpanded(false)}
                    className={`flex items-center space-x-3 px-5 py-4 rounded-2xl text-white shadow-xl transition-all duration-300 bg-gradient-to-r ${option.color} hover:${option.hoverColor} backdrop-blur-sm border border-white/20`}
                    style={{
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {option.icon}
                    </motion.div>
                    <span className="text-sm font-semibold whitespace-nowrap">{option.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleContactClick(option.href)}
                    className={`flex items-center space-x-3 px-5 py-4 rounded-2xl text-white shadow-xl transition-all duration-300 bg-gradient-to-r ${option.color} hover:${option.hoverColor} backdrop-blur-sm border border-white/20`}
                    style={{
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {option.icon}
                    </motion.div>
                    <span className="text-sm font-semibold whitespace-nowrap">{option.label}</span>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden group"
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isExpanded 
            ? "0 20px 40px rgba(0, 0, 0, 0.3)" 
            : "0 10px 25px rgba(0, 0, 0, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Sparkle Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="absolute top-2 right-2 h-3 w-3 text-white/60" />
          <Sparkles className="absolute bottom-2 left-2 h-2 w-2 text-white/40" />
        </motion.div>
        
        {/* Main Icon */}
        <motion.div
          className="relative z-10"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <X className="h-7 w-7" />
          ) : (
            <MessageCircle className="h-7 w-7" />
          )}
        </motion.div>
        
        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </div>
  );
};

export default FloatingContact;