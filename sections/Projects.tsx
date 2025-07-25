"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Blogs-Galaxy",
    image: "/images/blogsgalaxy.png",
    gitLink: "https://github.com/madsdev404/Blogs-Galaxy",
    liveLink: "https://blogs-galaxy.web.app/",
  },
  {
    title: "Auto-Showroom",
    image: "/images/auto.png",
    gitLink: "https://github.com/madsdev404/Auto-Showroom",
    liveLink: "https://mads-auto-showroom.web.app/",
  },
  {
    title: "Portfolio website",
    image: "/images/portfolio.png",
    gitLink: "https://github.com/madsdev404/My-Personal-Portfolio",
    liveLink: "https://masum-abduss-sobhan.web.app/",
  },
  {
    title: "ema-john-shop",
    image: "/images/emajon.png",
    gitLink: "https://github.com/madsdev404/ema-john-shop",
    liveLink: "https://jazzy-moxie-04ecd0.netlify.app/",
  },
  {
    title: "whatsapp_clone",
    image: "/images/whatsapp.png",
    gitLink: "https://github.com/madsdev404/whatsapp_clone",
    liveLink: "#",
  },
  {
    title: "TaskNest",
    image: "/images/dark_logout_home.png",
    gitLink: "https://github.com/madsdev404/task_management",
    liveLink: "#",
  },
  {
    title: "DocTime",
    image: "/images/doctime.png",
    gitLink: "https://github.com/madsdev404/DocTime-Client",
    liveLink: "#",
  },
  {
    title: "Digitaz",
    image: "/images/dijitaz.png",
    gitLink: "https://github.com/madsdev404/Digitaz-front-end-",
    liveLink: "https://digitaz.web.app/",
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
            <span className="subheading text-lg font-semibold text-gray-500">
              Accomplishments
            </span>
            <h2 className="mb-4 text-3xl font-bold">My Projects</h2>
            <p className="text-gray-500">
              Featured projects include task management systems, food delivery
              apps, and real-time chat applications—built with React, Django,
              Firebase, and Expo. Each project highlights a commitment to
              quality, user experience, and modern best practices.
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
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 group"
            >
              <div
                className="project img shadow relative flex justify-center items-center h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 z-10">
                  <h3 className="text-white dark:text-gray-100 text-md font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
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
