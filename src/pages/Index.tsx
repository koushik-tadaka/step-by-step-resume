
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PopularCourses from '@/components/PopularCourses';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import InstructorCTA from '@/components/InstructorCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularCourses />
        <Stats />
        <Testimonials />
        <InstructorCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
