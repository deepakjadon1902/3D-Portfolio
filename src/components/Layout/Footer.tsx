import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 dark:bg-slate-950 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">+91 91493 70081</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">deepakjadon1907@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">GLA University, Mathura</span>
              </div>
            </div>
          </div>

          Quick Links
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="/resume" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Resume
              </a>
              <a href="/projects" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-slate-300 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/deepakjadon1902"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/deepak-jadon-612487272"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a
                href="mailto:deepakjadon1907@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            © 2024 Deepak Jadon. All rights reserved. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;