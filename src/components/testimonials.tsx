'use client'
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  clientName: string;
  clientRole: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    clientRole: 'Homeowner',
    text: 'The transformation of our living space was beyond expectations. Their attention to detail and creative solutions brought new life to our home.',
    rating: 5,
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    clientRole: 'Business Owner',
    text: 'Professionalism personified! They perfectly captured our brand identity in our office redesign. The project was completed on time and within budget.',
    rating: 5,
  },
  {
    id: 3,
    clientName: 'Emma Williams',
    clientRole: 'Interior Designer',
    text: 'Collaborating with this team was a pleasure. Their innovative approach and technical expertise elevated our joint project to new heights.',
    rating: 4,
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mon font-bold text-gray-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-zinc-600 open font-medium text-lg">
            Discover what our valued clients say about our collaboration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 yel">
                <FaQuoteLeft className="text-3xl opacity-80" />
              </div>
              <p className="text-zinc-600 mb-6 open font-medium leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <FaStar
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'yel'
                          : 'text-gray-300'
                      }`}
                    />
                  </motion.span>
                ))}
              </div>
              <h3 className="text-lg mon font-semibold text-gray-900">
                {testimonial.clientName}
              </h3>
              <p className="text-zinc-500 font-medium open">{testimonial.clientRole}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
