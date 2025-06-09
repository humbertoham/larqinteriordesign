'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHandshake, FaSwatchbook } from "react-icons/fa";
import { FiAward, FiHeart } from "react-icons/fi";

const AboutUs = () => {

   
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 },
    },
  };


  const values = [
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description: "Your vision is our blueprint. We prioritize collaboration and transparency in every project."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Award-Winning Excellence",
      description: "Recognized industry leaders in innovative design solutions and execution."
    },
    {
      icon: <FaSwatchbook className="w-8 h-8" />,
      title: "Sustainable Practices",
      description: "Committed to eco-friendly materials and energy-efficient design strategies."
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Passionate Craftsmanship",
      description: "Every detail meticulously curated to perfection by our expert team."
    }
  ];

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <div className="lg:w-1/2 relative">
            <Image
              src="/images/PROYECTOS/RENDERS/1.jpg" // Replace with your actual image path
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mon text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg open font-medium text-zinc-600 leading-relaxed">
              Founded in 2022, LARQ has redefined interior design
              excellence across residential and commercial spaces. What began as
              a small studio with big dreams has blossomed into an award-winning
              practice, delivering transformative environments that harmonize
              functionality with aesthetic brilliance.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold yel mon mb-4">Mission</h3>
            <p className="text-zinc-600 open font-medium leading-relaxed">
              To craft bespoke interior experiences that elevate human
              interaction with space, combining innovative design solutions
              with sustainable practices to create environments that inspire
              and endure.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-stone-100 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mon text-stone-900 mb-4">Vision</h3>
            <p className="text-zinc-600 open font-medium leading-relaxed">
              To be the global benchmark for transformative interior design,
              where spatial innovation meets human-centric design principles
              to shape the future of living and working environments.
            </p>
          </motion.div>
        </div>
      </section>

      
     <section className="py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white transition-colors border border-transparent hover:border-gray-200 shadow-md hover:shadow-xl"
            >
              <div className="yel mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl mon font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-zinc-600 open font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse gap-12 items-center"
        >
          <div className="lg:w-1/2 relative">
            <Image
              src="/images/PROYECTOS/DECK/2.jpeg" // Replace with your actual image path
              alt="Design Philosophy"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mon text-gray-900 mb-6">
              Design Philosophy
            </h2>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed">
              We believe in design that tells a story. Every curve, texture, and
              hue is meticulously curated to create spaces that resonate with
              their inhabitants. Our approach combines empirical research with
              artistic intuition, ensuring each project achieves the perfect
              balance between form and function.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutUs;