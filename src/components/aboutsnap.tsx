'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
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
            <h2 className="text-3xl md:text-4xl mon font-bold text-gray-900 mb-6">
              Crafting Spaces<br /> with Intention
            </h2>
            
            <p className="text-lg text-zinc-600 font-medium open mb-8 leading-relaxed">
              At the heart of our practice lies a commitment to transform environments through 
              thoughtful design. We believe spaces should inspire, comfort, and reflect the 
              unique stories of those who inhabit them. With a decade of expertise, we merge 
              functional elegance with sustainable innovation.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link
                href="/aboutus"
                className="flex items-center gap-2 text-lg font-semibold mon text-black transition-colors"
              >
                Discover Our Story
                <FiArrowUpRight className="w-5 h-5 yel transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -left-12 -top-12 w-full h-16 rounded-full blur-3xl -z-10" />
            
            <motion.div
              variants={imageVariants}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/PROYECTOS/LIVINGROOM/2.jpeg"
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
                src="/images/PROYECTOS/LIVINGROOM/5.jpeg"
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