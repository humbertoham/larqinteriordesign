'use client'
import { motion } from 'framer-motion'
import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaBuilding
} from 'react-icons/fa'

export default function ContactDetails() {
  const contactDetails = [
    {
      icon: <FaBuilding className="w-6 h-6 text-indigo-600" />,
      title: 'Design Studio',
      content: 'Luxe Interiors Design Collective'
    },
    {
      icon: <FaMapMarker className="w-6 h-6 text-indigo-600" />,
      title: 'Visit Us',
      content: (
        <>
          123 Design Avenue
          <br />
          Creative District
          <br />
          New York, NY 10001
          <br />
          United States
        </>
      )
    },
    {
      icon: <FaPhone className="w-6 h-6 text-indigo-600" />,
      title: 'Call Us',
      content: (
        <a href="tel:+11234567890" className="hover:text-indigo-600 transition-colors">
          +1 (123) 456-7890
        </a>
      )
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-indigo-600" />,
      title: 'Email Us',
      content: (
        <a href="mailto:info@luxeinteriors.com" className="hover:text-indigo-600 transition-colors">
          info@luxeinteriors.com
        </a>
      )
    },
    {
      icon: <FaClock className="w-6 h-6 text-indigo-600" />,
      title: 'Business Hours',
      content: (
        <>
          <span className="font-medium">Mon-Fri:</span> 9:00 AM - 6:00 PM
          <br />
          <span className="font-medium">Sat:</span> 10:00 AM - 4:00 PM
          <br />
          <span className="font-medium">Sun:</span> Closed
        </>
      )
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <p className="text-gray-600">Connect with our design experts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-50 rounded-lg">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
            <div className="text-gray-600 space-y-2">{item.content}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Visit Our Studio</h3>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-73.98542828459418!3d40.74844047932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629786507963!5m2!1sen!2sus"
            width="100%"
            height="300"
            className="border-0"
            allowFullScreen
            loading="lazy"
            title="Studio Location"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}