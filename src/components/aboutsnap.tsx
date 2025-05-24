'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const AboutSnapshot = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section className="relative pb-24 pt-14 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Collage */}
          

          {/* Mission Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-4xl rale font-bold text-gray-900 mb-6">
              Crafting Spaces<br /> with Intention
            </h2>
            
            <p className="text-lg text-gray-600 lat mb-8 leading-relaxed">
              At the heart of our practice lies a commitment to transform environments through 
              thoughtful design. We believe spaces should inspire, comfort, and reflect the 
              unique stories of those who inhabit them. With a decade of expertise, we merge 
              functional elegance with sustainable innovation.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <a
                href="/aboutus"
                className="flex items-center gap-2 text-lg font-semibold lat text-black transition-colors"
              >
                Discover Our Story
                <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full blur-3xl -z-10" />
            
            <motion.div
              variants={imageVariants}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/PROYECTOS/RENDERS/005.jpg"
                alt="Design team working"
                fill
                className="object-cover  transition-all duration-500"
              />
            </motion.div>
            
            <motion.div
             variants={imageVariants}
              className="absolute -left-8 -bottom-8 w-2/3 aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-white"
            >
              <Image
                src="/images/PROYECTOS/RENDERS/003.jpg"
                alt="Completed interior project"
                fill
                className="object-cover transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;