
import React from 'react';
import { BookOpen, Users, GraduationCap, Globe } from 'lucide-react';

const stats = [
  {
    icon: <BookOpen className="h-10 w-10 text-indigo-500" />,
    value: "10,000+",
    label: "Courses"
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-500" />,
    value: "200,000+",
    label: "Students"
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-indigo-500" />,
    value: "500+",
    label: "Expert Instructors"
  },
  {
    icon: <Globe className="h-10 w-10 text-indigo-500" />,
    value: "150+",
    label: "Countries"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Trusted by Millions Worldwide
          </h2>
          <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
            Join our global community of learners and transform your career with our extensive range of courses.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-indigo-800 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-indigo-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
