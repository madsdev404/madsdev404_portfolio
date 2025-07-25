"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaCode,
  FaFire,
  FaTools,
  FaIdCardAlt,
  FaPenNib,
  FaSearch,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Responsive Web Design",
    description:
      "Crafting visually appealing and user-friendly websites optimized for all devices using Tailwind CSS and modern UI trends.",
    icon: FaLaptopCode,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Building robust, scalable applications with React, Django, and Firebase — from database to deployment.",
    icon: FaServer,
  },
  {
    title: "Frontend Development",
    description:
      "Developing dynamic, component-based UIs with React.js and Next.js to deliver seamless user experiences.",
    icon: FaCode,
  },
  {
    title: "Firebase Integration",
    description:
      "Implementing real-time databases, secure authentication, and cloud functions with Firebase for modern web apps.",
    icon: FaFire,
  },
  {
    title: "Admin Dashboards",
    description:
      "Creating powerful admin panels for managing users, content, and data with clean UX and secure access controls.",
    icon: FaTools,
  },
  {
    title: "Portfolio & Branding Sites",
    description:
      "Designing custom personal or brand websites that reflect identity and professionalism with fast performance.",
    icon: FaIdCardAlt,
  },
  {
    title: "Basic Graphic Design",
    description:
      "Delivering minimal design assets like logos, banners, and social media visuals using Canva or Photoshop.",
    icon: FaPenNib,
  },
  {
    title: "Technical SEO Setup",
    description:
      "Setting up SEO basics like meta tags, sitemap, and structured data for better visibility on search engines.",
    icon: FaSearch,
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section bg-white dark:bg-gray-800 py-16"
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
            <span className="subheading text-lg font-semibold text-gray-600">
              I am great at
            </span>
            <h2 className="mb-4 text-4xl font-bold">
              Delivering smart, scalable, and user-friendly web solutions.
            </h2>
            <p className="text-gray-700 dark:text-gray-500">
              From responsive design to full-stack development, I help bring
              digital ideas to life with precision and creativity. I focus on
              clean code, performance, and user experience to build apps that
              people love to use.
            </p>
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
              <div className="media block-6 services block bg-white dark:bg-gray-700 rounded-lg shadow p-6 text-center">
                <div className="icon flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white mx-auto mb-4">
                  {React.createElement(service.icon, { className: "text-3xl" })}
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    {service.description}
                  </p>
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
