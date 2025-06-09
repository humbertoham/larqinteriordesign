'use client'
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaSwatchbook } from 'react-icons/fa';
import Link from 'next/link';
const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 },
    },
  };

  return (
    <section
      className="relative py-24 px-4 lg:px-8 bg-black overflow-hidden"
      style={{
        backgroundImage: "url('/images/PROYECTOS/RENDERS/003.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70" /> {/* Overlay */}

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl mon lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Space with<br /><span className='yel'>Expert Design</span>  Solutions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg open font-medium text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to elevate your interior to new heights of sophistication? Let's collaborate to create spaces that inspire and endure.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href='/contactus' className="group relative inline-flex items-center mon justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="mr-4">Schedule Consultation</span>
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background pattern on top of image */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </section>
  );
};

export default CTA;
