
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';
import GlassCard from '../components/UI/GlassCard';
import Button from '../components/UI/Button';

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: "btZrxO9w5PSJuEr_k"
      });
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_name: 'Deepak Jadon',
        reply_to: formData.email.trim()
      };

      console.log('Attempting to send email with params:', templateParams);
      console.log('Service ID:', 'service_x3cfrs7');
      console.log('Template ID:', 'template_vczrj36');

      // Send email using EmailJS with proper error handling
      const result = await emailjs.send(
        'service_x3cfrs7', // Your correct service ID
        'template_vczrj36', // Your correct template ID
        templateParams
      );

      console.log('EmailJS result:', result);

      if (result.status === 200 || result.text === 'OK') {
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error: any) {
      console.error('Email sending failed:', error);
      
      // More specific error messages
      let errorMessage = 'Failed to send message. Please try again or contact me directly at deepakjadon1907@gmail.com';
      
      if (error.text && error.text.includes('service ID not found')) {
        errorMessage = 'Error: The service ID not found. To find this ID, visit https://dashboard.emailjs.com/admin. Please try again or contact me directly.';
      } else if (error.text && error.text.includes('template ID not found')) {
        errorMessage = 'Error: The template ID not found. Please check your template ID in the EmailJS dashboard.';
      } else if (error.text) {
        errorMessage = `Error: ${error.text}. Please try again or contact me directly.`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}. Please try again or contact me directly.`;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (error) {
      setError('');
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
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.a
                  href="tel:+919149370081"
                  className="flex items-start space-x-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-300">+91 91493 70081</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="mailto:deepakjadon1907@gmail.com"
                  className="flex items-start space-x-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">deepakjadon1907@gmail.com</p>
                  </div>
                </motion.a>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                    <p className="text-slate-600 dark:text-slate-300">GLA University, Mathura</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Quick Response Promise */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Quick Response Promise
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                feel free to call me directly.
              </p>
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <Check className="h-5 w-5" />
                <span className="text-sm font-medium">Available for freelance work</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. I'll get back to you within 24 hours!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-300 text-sm">{error}</span>
                    </motion.div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      maxLength={1000}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none transition-all duration-200"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;