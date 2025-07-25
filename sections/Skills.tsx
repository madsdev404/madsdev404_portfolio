"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SkillItem = dynamic(() => import("@/components/SkillItem"), {
  ssr: false,
});

const skillsData = [
  { name: "HTML", percentage: 98 },
  { name: "CSS", percentage: 96 },
  { name: "JavaScript", percentage: 92 },
  { name: "React.js", percentage: 88 },
  { name: "Next.js", percentage: 80 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "Firebase", percentage: 85 },
  { name: "Django", percentage: 90 },
  { name: "Python", percentage: 88 },
  { name: "C", percentage: 85 },
  { name: "C++", percentage: 80 },
  { name: "SQL", percentage: 75 },
  { name: "Git & GitHub", percentage: 93 },
  { name: "Teamwork", percentage: 90 },
  { name: "Communication", percentage: 88 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section bg-white dark:bg-gray-900 py-16"
      id="skills-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center pb-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 heading-section text-center animate-fade-in"
          >
            <span className="subheading text-lg font-semibold text-gray-600">
              Skills
            </span>
            <h2 className="mb-4 text-4xl font-bold dark:text-gray-100">
              My Skills
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              I specialize in building modern, responsive web applications with
              clean code, intuitive UI, and scalable architecture — blending
              creativity with functionality.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
