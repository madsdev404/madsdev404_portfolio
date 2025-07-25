"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaFacebook,
  FaChevronRight,
  FaHeart,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-footer ftco-section py-16 bg-gray-900 dark:bg-gray-700 text-gray-300 dark:text-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-1/4 mb-8 md:mb-0"
          >
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white dark:text-gray-100 text-2xl font-semibold mb-4">
                Let&apos;s talk about
              </h2>
              <p className="text-gray-400 dark:text-gray-300">
                Let&apos;s talk about your ideas, projects, or collaboration
                opportunities. I&apos;m here to help bring your vision to life
                with clean, efficient, and modern solutions.
              </p>
              <p className="mb-0 mt-4">
                <a
                  href="#contact-section"
                  className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                >
                  Contact Me
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/4 mb-8 md:mb-0 ml-0 md:ml-4"
          >
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white dark:text-gray-100 text-2xl font-semibold mb-4">
                Links
              </h2>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Projects
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-1/4 mb-8 md:mb-0"
          >
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white dark:text-gray-100 text-2xl font-semibold mb-4">
                Services
              </h2>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Technical SEO Setup
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Web Development
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Firebase Integration
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Full-Stack Web Applications
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Responsive Web Design
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/4 mb-8 md:mb-0"
          >
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 text-white dark:text-gray-100 text-2xl font-semibold mb-4">
                Have a Questions?
              </h2>
              <div className="block-23 mb-3">
                <ul className="list-none p-0">
                  <li className="flex mb-2 items-center">
                    <FaMapMarkerAlt className="mr-3" />
                    <span className="text-sm">
                      Horinakundu, Jhenaidah District, Khulna Division,
                      Bangladesh 🇧🇩
                    </span>
                  </li>
                  <li className="flex mb-2 items-center">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 flex items-center"
                    >
                      <FaPhone className="mr-3" />
                      <span className="text"> +880 17343-26573</span>
                    </a>
                  </li>
                  <li className="flex mb-2 items-center">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 flex items-center"
                    >
                      <FaPaperPlane className="mr-3" />
                      <span className="text">abduss.sobhan28@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-none p-0 flex mt-2">
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="https://github.com/madsdev404"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/madsdev404/"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/madsdev404/"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="row">
          <div className="w-full text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Copyright &copy;{new Date().getFullYear()} All rights reserved
              made with{" "}
              <FaHeart className="inline-block mx-1" aria-hidden="true" /> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                className="text-white hover:underline"
              >
                mads<span className="text-blue-500">dev</span>
                <span className="text-red-500">404</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
