'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section py-16"
      id="blog-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-5 pb-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 heading-section text-center animate-fade-in"
          >
            <span className="subheading text-lg font-semibold text-gray-600">Our Blog</span>
            <h2 className="mb-4 text-4xl font-bold">Recent Blog</h2>
            <p className="text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </motion.div>
        </div>
        {/* Add blog posts here */}
        <div className="text-center text-gray-500">
          <p>No blog posts yet. Coming soon!</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
