'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-footer ftco-section py-16 bg-gray-900 text-gray-300"
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
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">
                Let&apos;s talk about
              </h2>
              <p className="text-gray-400">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className="mb-0 mt-4">
                <a
                  href="#"
                  className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                >
                  Learn more
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
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">
                Links
              </h2>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Projects
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
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
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">
                Services
              </h2>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Web Design
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Web Development
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Business Strategy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Data Analysis
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 flex items-center"
                  >
                    <FaChevronRight className="mr-2" />
                    Graphic Design
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
              <h2 className="ftco-heading-2 text-white text-2xl font-semibold mb-4">
                Have a Questions?
              </h2>
              <div className="block-23 mb-3">
                <ul className="list-none p-0">
                  <li className="flex mb-2 items-center">
                    <FaMapMarkerAlt className="mr-3" />
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li className="flex mb-2 items-center">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 flex items-center"
                    >
                      <FaPhone className="mr-3" />
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li className="flex mb-2 items-center">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 flex items-center"
                    >
                      <FaPaperPlane className="mr-3" />
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-none p-0 flex mt-2">
                <li className="mr-3">
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    <FaTwitter />
                  </a>
                </li>
                <li className="mr-3">
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    <FaFacebook />
                  </a>
                </li>
                <li className="mr-3">
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="row">
          <div className="w-full text-center">
            <p className="text-gray-500">
              Copyright &copy;{new Date().getFullYear()} All rights reserved
              made with{" "}
              <FaHeart className="inline-block mx-1" aria-hidden="true" /> by{" "}
              <a
                href="https://colorlib.com"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                MADSDEV404
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
