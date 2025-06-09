'use client'
import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MdPerson, MdEmail, MdMessage } from 'react-icons/md';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Initialize EmailJS with your public key
  useEffect(() => {
    console.log('🔑 Initializing EmailJS with key', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('💥 handleSubmit fired', formData);
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData
      );
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('❌ EmailJS send error', error);
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg mx-auto my-24 bg-black p-8 rounded-2xl shadow-xl"
    >
      <h2 className="text-3xl md:text-4xl mon font-bold text-white mb-6 text-center">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <label htmlFor="name" className="block open text-sm font-medium text-white">
          <MdPerson className="yel inline-block mr-1 w-6 h-6" />

              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:border-[var(--green)] focus:ring focus:ring-[var(--green)] focus:ring-opacity-50 outline-none text-black"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm open font-medium text-white">
          <MdEmail className="yel inline-block mr-1 w-6 h-6" />

              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:border-[var(--green)] focus:ring focus:ring-[var(--green)] focus:ring-opacity-50 outline-none text-black"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <label htmlFor="message" className="block open text-sm font-medium text-white">
          <MdMessage className="yel inline-block mr-1 w-6 h-6 mt-1" />

              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:border-[var(--green)] focus:ring focus:ring-[var(--green)] focus:ring-opacity-50 outline-none text-black resize-y"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full flex justify-center mon items-center py-3 rounded-2xl shadow-lg text-sm font-semibold text-black transition-all ${
            isSubmitting
              ? 'bg-white/60 cursor-not-allowed'
              : 'bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
          }`}
        >
          {isSubmitting && (
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {/* Submission Status */}
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`px-4 py-3 rounded-xl text-sm font-medium ${
              submitStatus.success ? 'bg-green-100 text-[var(--darkgreen)]' : 'bg-red-100 text-red-800'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}
      </form>
    </motion.section>
  );
};

export default ContactForm;
