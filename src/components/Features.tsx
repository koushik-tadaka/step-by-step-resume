
import React from 'react';
import { BookOpen, Award, Users, Monitor } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with real-world experience and proven expertise in their fields."
  },
  {
    icon: <Monitor className="h-8 w-8 text-indigo-500" />,
    title: "Learn Anytime, Anywhere",
    description: "Access course content on any device, at any time. Learn at your own pace from anywhere in the world."
  },
  {
    icon: <Award className="h-8 w-8 text-indigo-500" />,
    title: "Earn Certificates",
    description: "Receive recognized certificates upon course completion to showcase your new skills to employers."
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-500" />,
    title: "Community Support",
    description: "Join a community of learners where you can ask questions, collaborate, and network with peers."
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose <span className="text-indigo-600">EduSpark</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the tools and resources you need to advance your career and achieve your learning goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
