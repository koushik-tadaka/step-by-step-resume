
import React from 'react';
import { Button } from '@/components/ui/button';

const InstructorCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Become an Instructor
            </h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-2xl">
              Share your knowledge with millions of students worldwide. Create engaging courses and earn income while making a difference.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-indigo-700 hover:bg-gray-100">
                Start Teaching Today
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-indigo-700">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Create at your own pace</h3>
              </div>
              <p className="text-gray-600 mb-6">Publish your course when you're ready. No deadlines or pressure.</p>
              
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Earn income</h3>
              </div>
              <p className="text-gray-600">Get paid for every student who enrolls in your courses. Expand your reach globally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorCTA;
