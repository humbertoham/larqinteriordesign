"use client";
import { motion } from 'framer-motion';
import React from 'react';

export default function ButtonR() {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-40">
        <motion.a
          href="https://api.whatsapp.com/send/?phone=%2B19312246761"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.img
            src="/wpp.png"
            alt="WhatsApp"
            className="w-16 h-16"
            whileHover={{ rotate: 10 }}
            whileTap={{ rotate: -10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          />
        </motion.a>
      </div>
    </>
  );
}
