'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules once
SwiperCore.use([Navigation, Pagination, Autoplay]);

interface CarouselProps {
  imageUrls: string[];
  title: string;
}

export default function PortfolioCarousel({ imageUrls, title }: CarouselProps) {
  // any client‑only hooks or effects can go here
  useEffect(() => {
    // e.g. analytics, resize listeners, etc.
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-2xl shadow-lg overflow-hidden"
    >
      <Swiper
        
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {imageUrls.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={url}
              alt={`${title} image ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
