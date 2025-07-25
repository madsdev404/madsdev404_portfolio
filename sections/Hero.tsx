"use client";
import React from "react";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="subheading text-lg font-semibold block"
        >
          Hello! This is Masum Abduss Sobhan
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold mt-3 mb-4"
        >
          Creating intuitive <span className="text-blue-400">interfaces</span>{" "}
          and robust <span className="text-green-400">backends</span> — where
          creativity meets code.
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-bold mt-3 mb-4"
        >
          <span className="text-yellow-400">Full-Stack Web Developer</span> |{" "}
          <span className="text-purple-400">UI/UX Enthusiast</span> |{" "}
          <span className="text-orange-400">Problem Solver</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="#contact-section"
            className="bg-blue-500 px-4 py-3 rounded-full text-white hover:bg-blue-600 mr-4"
          >
            Hire me
          </Link>
          <Button variant="outline">Download Resume</Button>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
