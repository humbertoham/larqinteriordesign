"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMail, FiPhone} from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTiktok} from 'react-icons/fa6';
import Image from 'next/image';
const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
   { title: 'Real Estate', href: '/realestate' },
  { title: 'Projects', href: '/projects' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/LarqArchitecture" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/larqinteriordesign" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@laurellaurel98" },
 
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image src="/logowhitelarq.svg" alt="" width= {200} height={100} />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              <Link href={link.href} className="relative">
                <motion.div whileHover="hover" initial="rest" className="relative">
                  <p className="text-white rale font-bold hover:text-gray-200 transition">
                    {link.title}
                  </p>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left"
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
           <div className="flex justify-end">
              <motion.button
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                className="text-white p-2 hover:bg-white hover:text-black rounded-full transition-all"
              >
                <FiMenu className="text-2xl" />
              </motion.button>
            
        </div>
      </div>
</div>
      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.23, 1, 0.32, 1], duration: 0.4 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="w-full">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">
    <Link href="/">
      <Image src="/logoblacklarq.svg" alt="" width={200} height={100} />
    </Link>
    <motion.button
      onClick={toggleMenu}
      whileHover={{ scale: 1.1 }}
      className="text-black p-2 hover:bg-black hover:text-white rounded-full transition-all"
    >
      <FiX className="text-2xl" />
    </motion.button>
  </div>
</div>
            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              
              <ul className="space-y-8">
                {navLinks.map((link) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ x: 50 }}
                      animate={{ x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      <Link href={link.href} className="block">
                        <motion.div
                          onClick={() => setIsOpen(false)}
                          className="relative group"
                          whileHover={{ x: 10 }}
                        >
                          <p className="text-black rale text-xl font-medium mb-4 transition-all group-hover:text-gray-900">
                            {link.title}
                          </p>
                          <div className="h-[2px] bg-black w-full max-w-0 group-hover:max-w-full transition-all duration-500" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Additional Information Section */}
            <div className="border-t border-black py-8 px-8">
              {/* Social Media */}
              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="text-black text-2xl hover:text-black transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Contact Information */}
              <div className="flex flex-col items-center space-y-4 text-black">
                <div className="flex items-center space-x-3">
                  <FiMail className="text-xl" />
                  <span>contact@larqinteriordesign.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-xl" />
                  <span>+1 (931) 224-6761</span>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-center mt-8 lat font-light text-black">
                © {new Date().getFullYear()} <Link onClick={() => setIsOpen(false)} href="/" className=' hover:underline'> LARQ Interior Design.</Link> All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}