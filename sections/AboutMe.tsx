"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSuitcaseRolling, FaFilm } from "react-icons/fa";
import { MdNature } from "react-icons/md";
import { BiPlanet } from "react-icons/bi";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-about ftco-section ftco-no-pt ftco-no-pb py-16 dark:bg-gray-800"
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
                    I&#39;m Masum Abduss Sobhan, a self-taught full-stack web
                    developer from Khulna, Bangladesh. I specialize in building
                    modern, responsive, and user-focused web applications using
                    tools like React, Next.js, Django, and Firebase. With a deep
                    passion for problem-solving and design, I aim to create
                    digital products that are not only functional but also
                    intuitive and visually appealing. I believe in continuous
                    learning and enjoy taking on new challenges that push me to
                    grow. Currently, I&#39;m working on several personal
                    projects and exploring areas like scalable architecture, AI
                    integration, and real-time applications. My long-term goal
                    is to build impactful tools that make people&#39;s lives
                    easier.
                  </p>

                  <ul className="about-info mt-4 px-0 md:px-2 list-none">
                    <li className="flex mb-2">
                      <span>Name:</span>{" "}
                      <span className="ml-2">Masum Abduss Sobhan</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Date of birth:</span>{" "}
                      <span className="ml-2">November 20, 2004</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Address:</span>{" "}
                      <span className="ml-2">
                        Horinakundu, Jhenaidah District, Khulna Division,
                        Bangladesh 🇧🇩
                      </span>
                    </li>
                    <li className="flex mb-2">
                      <span>Zip code:</span> <span className="ml-2">7310</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Email:</span>{" "}
                      <span className="ml-2">abduss.sobhan28@gmail.com</span>
                    </li>
                    <li className="flex mb-2">
                      <span>Phone: </span>{" "}
                      <span className="ml-2">+880 17343-26573</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full mt-4">
                  <div className="my-interest flex flex-wrap w-full">
                    <div className="interest-wrap flex items-center mr-4 mb-2">
                      <div className="icon flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white mr-2">
                        <MdNature className="text-xl" />
                      </div>
                      <div className="text">Nature</div>
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
                        <BiPlanet className="text-xl" />
                      </div>
                      <div className="text dark:text-gray-200">Plantation</div>
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
