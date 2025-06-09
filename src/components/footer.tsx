"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
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
      { label: "Services", url: "/Services" },
      { label: "Portfolio", url: "/portfolio" },
      { label: "Contact", url: "/contactus" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", url: "/termsofservice" },
      { label: "Privacy Policy", url: "/privacypolicy" }
    ]
  },

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
            ><Link href='/'>
              <Image
                src="./logowhitelarq.svg"
                alt="LARQ Interior Design Logo"
                fill
                className="object-contain hover:opacity-90 transition-opacity"
                priority
              />
              </Link>
            </motion.div>
            <p className="text-zinc-200 open  text-sm leading-relaxed text-center md:text-left max-w-xs font-light tracking-wide">
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
  whileHover={{ 
    scale: 1.2,
    transition: { type: "spring", stiffness: 300 }
  }}
  className="p-2"
>
  <Icon className="w-5 h-5" />
</motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {linkSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-xs font-bold tracking-widest mon text-menta uppercase pb-2 border-b border-menta">
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
                      className=" text-sm transition-colors duration-300 relative open font-light tracking-wide"
                    >
                      <span className="absolute left-0 -bottom-1 w-0 h-px open font-light transition-all duration-300 group-hover:w-4"></span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
         
  <div className="space-y-4">
      <h4 className="text-xs font-bold mon tracking-widest text-menta uppercase mb-7 pb-2 border-b border-menta">
    Contact
  </h4>
    <motion.div whileHover="hover" variants={linkVariants} className="group">
      <a href="tel:+1234567890" className="flex items-center space-x-3  transition-colors">
        <FaPhone className="w-4 h-4" />
        <span className="text-sm open font-light">+1 (931) 224-6761</span>
      </a>
    </motion.div>
    <motion.div whileHover="hover" variants={linkVariants} className="group">
      <a href="mailto:info@larq.com" className="flex items-center space-x-3  transition-colors">
        <FaEnvelope className="w-4 h-4" />
        <span className="text-sm open font-light">info@larqinteriors.com</span>
      </a>
    </motion.div>
    <motion.div whileHover="hover" variants={linkVariants} className="group">
      <div className="flex items-start space-x-3 text-menta">
        <FaMapMarker className="w-4 h-4 mt-1" />
        <p className="text-sm open font-light">
          Shelbyville, Tennessee.  <br/>
          
        </p>
      </div>
    </motion.div>
  </div>
</div>

        {/* Divider */}
        <div className="border-t border-menta mt-16 pt-8">
          <div className="flex open flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs  font-light tracking-wide">
              &copy; {new Date().getFullYear()}<Link href='/' className="hover:underline"> LARQ Interior Design.</Link> All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacypolicy" className=" hover:underline text-xs font-light transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/termsofservice" className="hover:underline text-xs font-light transition-colors duration-300">
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
