"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
      <Image
  src="/images/PROYECTOS/RENDERS/005.jpg"
  alt="Hero Background"
  fill
  style={{ objectFit: 'cover', objectPosition: 'center' }}
  priority
/>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center px-4 max-w-2xl"
      >
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl rale font-black text-white leading-tight"
        >
          Designing Dreams, Decorating Homes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl lat font-light text-zinc-200"
        >
         Crafting elegant interiors that inspire comfort, style, and lasting beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <Link href="/services">
            <p className="px-6 py-3 rounded-full rale text-white font-medium hover:underline transition">
              Get Started < FaArrowRight className='inline' />
            </p>
          </Link>
          <Link href="/portfolio">
            <p className="px-6 py-3 border border-white rale rounded-full text-white font-medium hover:text-black hover:bg-white hover:text-darkgreen transition">
              Our Work
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

