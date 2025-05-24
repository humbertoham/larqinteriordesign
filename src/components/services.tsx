'use client'
import { motion } from "framer-motion";
import { FiHome, FiLayout, FiDroplet, FiGrid, FiPenTool, FiCheckSquare, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
const ServicesC = () => {
  const services = [
    {
      id: 1,
      title: "Residential Design",
      description: "Transform your living spaces into modern, functional, and stylish environments that reflect your personality.",
      icon: <FiHome className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Commercial Design",
      description: "Create professional workspaces that enhance productivity while maintaining aesthetic appeal.",
      icon: <FiLayout className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Color Consultation",
      description: "Expert color scheme selection to create the perfect mood and atmosphere for your spaces.",
      icon: <FiDroplet className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Space Planning",
      description: "Optimize your space utilization with intelligent layout designs and functional zoning.",
      icon: <FiGrid className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "Custom Furniture",
      description: "Bespoke furniture solutions tailored to your space requirements and design preferences.",
      icon: <FiPenTool className="w-8 h-8" />,
    },
    {
      id: 6,
      title: "Project Management",
      description: "End-to-end management of your design project from concept to completion.",
      icon: <FiCheckSquare className="w-8 h-8" />,
    },
  ];

  // Spring-based stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Spring-based item animation
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold rale text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 lat max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to transform your spaces into functional and aesthetic masterpieces.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              }}
              className="bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300"
            >
              <motion.div
               // Tailwind blue-600
                className="text-gray-500 mb-6"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold rale text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 lat leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold rale text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h3>
          <motion.div variants={itemVariants}>
            <Link href='/contact' className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="mr-4">Schedule Consultation</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesC;
