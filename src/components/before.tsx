'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const BeforeAfter = () => {
  const [sliderValue, setSliderValue] = useState(50);

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold rale text-gray-900 mb-4"
          >
            Transformation Showcase
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg lat max-w-2xl mx-auto"
          >
            Witness the power of professional interior design through our project transformations
          </motion.p>
        </motion.div>

        {/* Image Comparison Slider */}
        <motion.div
          variants={itemVariants}
          className="group relative max-w-6xl mx-auto aspect-[3/2] rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0">
            {/* After Image */}
            <Image
              src="/images/PROYECTOS/RENDERS/002.jpg"
              alt="After transformation"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Before Image with Slider */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderValue}%` }}
          >
            <Image
              src="/images/PROYECTOS/RENDERS/003.jpg"
              alt="Before transformation"
              fill
              className="object-cover"
            />
          </div>

          {/* Slider Control */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="relative h-full w-1 bg-white/50">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full shadow-lg cursor-pointer transition-colors">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <FiArrowRight className="text-white transform " />
                </div>
              </div>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(parseInt(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </motion.div>

        {/* Services CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <a
              href="/services"
              className="flex items-center gap-4 bg-black lat text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Explore Our Services
              <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -left-48 -top-48 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10" />
        <div className="absolute -right-48 -bottom-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default BeforeAfter;