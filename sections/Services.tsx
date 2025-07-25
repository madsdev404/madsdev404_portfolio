'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCube, FaMobileAlt, FaCode, FaPaintBrush, FaLaptop, FaVectorSquare, FaSearch } from 'react-icons/fa';

const servicesData = [
  { title: 'Web Design', description: 'A small river named Duden flows by their place and supplies.', icon: FaCube },
  { title: 'Web Application', description: 'A small river named Duden flows by their place and supplies.', icon: FaMobileAlt },
  { title: 'Web Development', description: 'A small river named Duden flows by their place and supplies.', icon: FaCode },
  { title: 'Banner Design', description: 'A small river named Duden flows by their place and supplies.', icon: FaPaintBrush },
  { title: 'Branding', description: 'A small river named Duden flows by their place and supplies.', icon: FaLaptop },
  { title: 'Icon Design', description: 'A small river named Duden flows by their place and supplies.', icon: FaVectorSquare },
  { title: 'Graphic Design', description: 'A small river named Duden flows by their place and supplies.', icon: FaVectorSquare },
  { title: 'SEO', description: 'A small river named Duden flows by their place and supplies.', icon: FaSearch },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section py-16"
      id="services-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-5 pb-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 heading-section text-center animate-fade-in"
          >
            <span className="subheading text-lg font-semibold text-gray-600">I am great at</span>
            <h2 className="mb-4 text-4xl font-bold">We do awesome services for our clients</h2>
            <p className="text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </motion.div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <div className="media block-6 services block bg-white rounded-lg shadow p-6 text-center">
                <div className="icon flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white mx-auto mb-4">
                  {React.createElement(service.icon, { className: "text-3xl" })}
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;