"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section contact-section bg-white dark:bg-gray-800 ftco-no-pb py-16"
      id="contact-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-5 pb-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 heading-section text-center animate-fade-in"
          >
            <span className="subheading text-lg font-semibold text-gray-500 dark:text-gray-400">
              Contact Me
            </span>
            <h2 className="mb-4 text-3xl font-bold">Have a Project?</h2>
            <p className="text-gray-500 dark:text-gray-400">
              I&#39;m always open to new opportunities, freelance work, or just
              a friendly chat about tech and ideas. Reach out anytime!
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-8/12 px-4 mb-8"
          >
            <form
              action="#"
              className="bg-white dark:bg-gray-700 p-8 md:p-10 rounded-lg shadow contact-form"
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={7}
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-full cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full md:w-4/12 pl-2 pt-10"
          >
            <div className="w-full">
              <div className="dbox w-full flex mb-10">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Address:</span>Jhenaidah,
                    Khulna, Bangladesh 🇧🇩
                  </p>
                </div>
              </div>
              <div className="dbox w-full flex mb-10">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel://+8801734326573">+880 17343-26573</a>
                  </p>
                </div>
              </div>
              <div className="dbox w-full flex mb-10">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaPaperPlane className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:abduss.sobhan28@gmail.com">
                      abduss.sobhan28@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="dbox w-full flex">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaGlobe className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Website</span>{" "}
                    <a target="_blank" href="https://madsdev404.web.app">
                      madsdev404.web.app
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
