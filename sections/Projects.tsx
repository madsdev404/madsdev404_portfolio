"use client";
import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-1.jpg",
  },
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-2.jpg",
  },
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-3.jpg",
  },
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-4.jpg",
  },
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-5.jpg",
  },
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-6.jpg",
  },
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-7.jpg",
  },
  {
    title: "Branding & Illustration Design",
    category: "Web Design",
    image: "/images/work-8.jpg",
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section ftco-project py-16"
      id="projects-section"
    >
      <div className="container-fluid px-4 mx-auto">
        <div className="flex flex-wrap justify-center pb-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 heading-section text-center animate-fade-in"
          >
            <span className="subheading text-lg font-semibold text-gray-600">
              Accomplishments
            </span>
            <h2 className="mb-4 text-4xl font-bold">Our Projects</h2>
            <p className="text-gray-700">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <div
                className="project img shadow relative flex justify-center items-center h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text text-center p-4 relative z-10">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    <a href="#">{project.title}</a>
                  </h3>
                  <span className="text-gray-300 dark:text-gray-400 text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
