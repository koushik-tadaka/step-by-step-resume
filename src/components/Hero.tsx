
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="hidden sm:block sm:absolute sm:inset-0">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-indigo-500 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-indigo-200 opacity-20" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>
      </div>

      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            <span className="block">Unlock Your Potential With</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
              Online Education
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto mt-6 text-xl text-indigo-100">
            Access over 10,000 online courses from top instructors around the world. 
            Learn at your own pace and achieve your goals.
          </p>
          
          <div className="mt-10">
            <div className="max-w-xl mx-auto bg-white rounded-full p-2 flex items-center">
              <Search className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                className="flex-1 border-none focus:ring-0 outline-none px-4 py-2"
                placeholder="What do you want to learn today?"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6">
                Search
              </Button>
            </div>
            
            <p className="text-sm text-indigo-200 mt-3">
              Popular: Web Development, Data Science, Business Analytics, Digital Marketing
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-white">
              <span className="text-3xl font-bold">15K+</span>
              <span className="ml-2 text-indigo-200">Courses</span>
            </div>
            <div className="flex items-center text-white">
              <span className="text-3xl font-bold">8.5M+</span>
              <span className="ml-2 text-indigo-200">Students</span>
            </div>
            <div className="flex items-center text-white">
              <span className="text-3xl font-bold">4.7</span>
              <span className="ml-2 text-indigo-200">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
