'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const SecondaryServices = () => {
  const services = [
    { 
      title: 'Plumbing Solutions', 
      desc: 'Expert pipe installations, repairs, and maintenance for leak-free systems' 
    },
    { 
      title: 'Professional Painting', 
      desc: 'Premium finishes that transform spaces and protect your investments' 
    },
    { 
      title: 'Demolition Services', 
      desc: 'Safe, efficient site clearance for your renovation projects' 
    },
    { 
      title: 'Full-Scale Construction', 
      desc: 'Turnkey building solutions from foundation to completion' 
    },
    { 
      title: 'Living Spaces', 
      desc: 'Custom living rooms designed for comfort and style' 
    },
    { 
      title: 'Kitchen Remodeling', 
      desc: 'Functional culinary spaces with premium materials and layouts' 
    },
    { 
      title: 'Bathroom Renovations', 
      desc: 'Luxurious spa-like retreats with modern fixtures' 
    },
    { 
      title: 'Bedroom Suites', 
      desc: 'Personalized sanctuaries optimized for relaxation' 
    },
    { 
      title: 'Custom Closets', 
      desc: 'Smart storage solutions maximizing organization and space' 
    },
    { 
      title: 'Storm Rooms', 
      desc: 'Certified safe rooms for ultimate weather protection' 
    },
    { 
      title: 'Swimming Pools', 
      desc: 'Stunning custom pools with premium finishes and features' 
    },
    { 
      title: 'House Porches', 
      desc: 'Beautiful outdoor living extensions with durable construction' 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Services List */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl mon font-bold text-gray-900 mb-10">
            Premium <span className="yel">Home Transformation</span> Services
          </h2>
          
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 byel rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mon text-gray-900">{service.title}</h3>
                  <p className="mt-1 text-zinc-600 open font-medium">{service.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 relative w-full">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/images/PROYECTOS/BASEMENT/4.png" // Replace with your actual image path
              alt="Premium Home Services"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjY2MiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPlNlcnZpY2VzIEltYWdlPC90ZXh0Pjwvc3ZnPg=="
            />
          </div>
          
          <div className="absolute -bottom-6 -left-4 bg-black text-white px-8 py-6 rounded-xl shadow-lg max-w-xs">
            <h3 className="text-xl mon font-bold">5+ Years Experience</h3>
            <p className="mt-2 open font-medium ">Quality craftsmanship guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryServices;