import React from 'react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="subheading text-lg font-semibold block"
        >
          Hello! This is Clyde
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mt-3 mb-4"
        >
          Creative <span className="text-yellow-400">UI/UX</span> Designer &amp; Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="primary" className="mr-4">Hire me</Button>
          <Button variant="outline">Download CV</Button>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
