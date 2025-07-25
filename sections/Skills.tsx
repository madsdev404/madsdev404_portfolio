import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'CSS', percentage: 95 },
  { name: 'HTML', percentage: 98 },
  { name: 'jQuery', percentage: 68 },
  { name: 'Photoshop', percentage: 92 },
  { name: 'WordPress', percentage: 83 },
  { name: 'SEO', percentage: 95 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section bg-light py-16"
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
            <span className="subheading text-lg font-semibold text-gray-600">Skills</span>
            <h2 className="mb-4 text-4xl font-bold">My Skills</h2>
            <p className="text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full lg:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-center mb-4">{skill.name}</h2>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500 flex items-center justify-center text-blue-500 text-2xl font-bold">
                    {skill.percentage}<sup className="text-sm">%</sup>
                  </div>
                </div>
                <div className="flex justify-between text-center mt-4 text-gray-600 text-sm">
                  <div className="w-1/2 border-r border-gray-300">
                    <div className="font-bold">28%</div>
                    <span>Last week</span>
                  </div>
                  <div className="w-1/2">
                    <div className="font-bold">60%</div>
                    <span>Last month</span>
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

export default Skills;