'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpanishChatBubble() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-4 left-4 z-50"
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { 
              type: 'spring', 
              damping: 15,
              stiffness: 200
            }
          }}
          exit={{ 
            opacity: 0, 
            x: -100, 
            y: 100,
            transition: { duration: 0.3 }
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
           
            
            {/* Main bubble */}
            <div className="bg-black/80 backdrop-blur-sm text-white rounded-2xl py-3 pl-4 pr-10 shadow-lg">
              <div className="flex items-center gap-3">
                <motion.span 
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  💬
                </motion.span>
                <span className="font-medium open yel tracking-wide">We Speak Spanish!</span>
              </div>
            </div>
            
            {/* Close button */}
            <motion.button
              className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setVisible(false)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close banner"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}