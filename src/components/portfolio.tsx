

// components/Portfolio.tsx
'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCode, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: string[];
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio = ({ projects }: PortfolioProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const handleTechClick = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter(t => t !== tech));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.category.some(tech => tech.toLowerCase().includes(query)
    ));
    
    const matchesTechs = selectedTechs.every(tech => 
      project.category.includes(tech)
    );

    return matchesSearch && matchesTechs;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    },
    hover: { scale: 1.03 }
  };

  const techVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
  };

  return (
    <motion.section 
      className="pb-10"
      style={{ backgroundColor: '#fff' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
        


      <div className="container mx-auto px-4">
        {/* Search and Filters */}
         <div className="text-center mt-12 mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mon text-black mb-4"
          >
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg open font-medium text-zinc-600"
          >
            Explore our curated selection of exceptional design solutions
          </motion.p>
        </div>


        <motion.div 
          className="mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="max-w-xl mx-auto">
            {/* Selected Techs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedTechs.map((tech) => (
                <motion.div
                  key={tech}
                  className="lat px-3 py-1.5 text-sm rounded-full flex items-center gap-2 cursor-pointer"
                  style={{
                    backgroundColor: '#004643',
                    color: '#faf4d3',
                  }}
                  variants={techVariants}
                  onClick={() => handleTechClick(tech)}
                >
                  <FiCode className='yel' />
                  {tech}
                  <FiX className="ml-1" />
                </motion.div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative ">
              <FiSearch className="absolute left-4 yel top-1/2 transform -translate-y-1/2 text-xl" 
                />
              <input
                type="text"
                placeholder='Search'
                className="font-medium w-full px-6 py-4 open text-lg rounded-xl shadow-lg focus:outline-none pl-12"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
           <Link href={`/portfolio/${project.id}`} key={project.id}>
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={`${project.image}`} // Update with your image path
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    className="space-y-2"
                  >
                    <span className="text-sm font-light open text-zinc-200">
                      {project.category}
                    </span>
                    <h3 className="text-xl mon font-semibold">{project.title}</h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="open font-medium text-xl" style={{ color: '#172b2d' }}>
                Not Found
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;