'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
const projects = [
  {
    id: 1,
    title: "Basement Transformation",
    image: "/images/PROYECTOS/BASEMENT/2.png",
    category: ["Basement Remodel"]
  },
  {
    id: 2,
    title: "Social Area Design",
    image: "/images/PROYECTOS/DECK/1.jpeg",
    category: ["Entertaining Spaces"]
  },
  {
    id: 3,
    title: "Living Room Remodel",
    image: "/images/PROYECTOS/LIVINGROOM/1.jpeg",
    category: ["Living Room"]
  },

]

const PortfolioTeaser = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mon text-gray-900 mb-4"
          >
            Our Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg open font-medium text-gray-600"
          >
            Explore our curated selection of exceptional design solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Link href={`/portfolio/${project.id}`} key={project.id}>
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link  href='/portfolio' className="flex items-center  max-w-60 gap-2 mx-auto px-8 py-3 mon font-semibold text-black hover:text-white border-1 border-black hover:bg-black rounded-full transition-all duration-300">
            View All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioTeaser