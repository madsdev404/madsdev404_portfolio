import React from 'react';
import Button from '@/components/Button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <span className="subheading text-lg font-semibold">Hello! This is Clyde</span>
        <h1 className="text-5xl font-bold mt-3 mb-4">Creative <span className="text-yellow-400">UI/UX</span> Designer &amp; Developer</h1>
        <p>
          <Button variant="primary" className="mr-4">Hire me</Button>
          <Button variant="outline">Download CV</Button>
        </p>
      </div>
    </section>
  );
};

export default Hero;