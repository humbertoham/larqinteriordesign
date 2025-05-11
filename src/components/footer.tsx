"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/LarqArchitecture" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/larqinteriordesign" },
  { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@laurellaurel98" }
];

const linkSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", url: "/aboutus" },
      { label: "Projects", url: "/projects" },
      { label: "Contact", url: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", url: "/terms" },
      { label: "Privacy Policy", url: "/privacy" }
    ]
  }
];

const iconVariants = { hover: { scale: 1.2, y: -3 } };
const linkVariants = { hover: { x: 8 } };

export const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-24 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-48 h-20 cursor-pointer"
            >
              <Image
                src="./logowhitelarq.svg"
                alt="LARQ Interior Design Logo"
                fill
                className="object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left max-w-xs font-light tracking-wide">
              Crafting timeless spaces through innovative architecture and sustainable design principles.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  whileHover="hover"
                  variants={iconVariants}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-menta hover:text-yellow transition-all duration-300 p-2 rounded-full border border-menta hover:border-yellow"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {linkSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-xs font-medium tracking-widest text-menta uppercase pb-2 border-b border-menta">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover="hover"
                    variants={linkVariants}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <Link
                      href={link.url}
                      className="text-menta hover:text-yellow text-sm transition-colors duration-300 relative font-light tracking-wide"
                    >
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-4"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium tracking-widest text-menta uppercase pb-2 border-b border-menta">
              Newsletter
            </h4>
            <p className="text-menta text-sm font-light tracking-wide">
              Subscribe to receive design insights and exclusive updates.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-menta rounded-none px-4 py-3 text-sm text-white placeholder-menta focus:outline-none focus:border-yellow transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 text-sm font-medium tracking-wide  transition-colors duration-300 uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-menta mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-menta font-light tracking-wide">
              &copy; {new Date().getFullYear()} LARQ Interior Design. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-menta hover:text-yellow text-xs font-light transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="text-menta">|</span>
              <Link href="/terms" className="text-menta hover:text-yellow text-xs font-light transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
