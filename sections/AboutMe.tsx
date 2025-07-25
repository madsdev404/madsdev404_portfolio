"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaMusic,
  FaSuitcaseRolling,
  FaFilm,
  FaFootballBall,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-about ftco-section ftco-no-pt ftco-no-pb py-16"
      id="about-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap no-gutters">
          <div className="w-full md:w-1/2 lg:w-5/12 flex">
            <div className="img-about relative flex items-stretch w-full">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <Image
                src="/images/about.jpg"
                alt="About Me"
                fill
                style={{ objectFit: "cover" }}
                className="align-self-stretch"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12 pl-0 md:pl-4 lg:pl-5 py-5">
            <div className="py-md-5">
              <div className="flex flex-wrap justify-start pb-3">
                <div className="w-full heading-section text-left animate-fade-in">
                  <span className="subheading text-lg font-semibold text-gray-600">
                    My Intro
                  </span>
                  <h2 className="mb-4 text-4xl font-bold capitalize">
                    About Me
                  </h2>
                  <p className="text-gray-700 dark:text-gray-200">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>

                  <ul className="about-info mt-4 px-0 md:px-2 list-none">
                    <li className="flex mb-2">
                      <span>Name:</span>{" "}
                      <span className="ml-2">madsdev404</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Date of birth:</span>{" "}
                      <span className="ml-2">January 01, 1990</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Address:</span>{" "}
                      <span className="ml-2">San Francisco CA 97987 USA</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Zip code:</span> <span className="ml-2">1000</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Email:</span>{" "}
                      <span className="ml-2">cydenowitzki@gmail.com</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Phone: </span>{" "}
                      <span className="ml-2">+1-2234-5678-9-0</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full mt-4">
                  <div className="my-interest flex flex-wrap w-full">
                    <div className="interest-wrap flex items-center mr-4 mb-2">
                      <div className="icon flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white mr-2">
                        <FaMusic className="text-xl" />
                      </div>
                      <div className="text">Music</div>
                    </div>
                    <div className="interest-wrap flex items-center mr-4 mb-2">
                      <div className="icon flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white mr-2">
                        <FaSuitcaseRolling className="text-xl" />
                      </div>
                      <div className="text">Travel</div>
                    </div>
                    <div className="interest-wrap flex items-center mr-4 mb-2">
                      <div className="icon flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white mr-2">
                        <FaFilm className="text-xl" />
                      </div>
                      <div className="text">Movie</div>
                    </div>
                    <div className="interest-wrap flex items-center mr-4 mb-2">
                      <div className="icon flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white mr-2">
                        <FaFootballBall className="text-xl" />
                      </div>
                      <div className="text">Sports</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
