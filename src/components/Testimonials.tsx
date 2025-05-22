
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jessica Williams",
    role: "Software Developer",
    company: "Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "The Web Development Bootcamp completely changed my career path. I went from knowing nothing about coding to landing my dream job in just 6 months. The instructors are incredibly knowledgeable and supportive."
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Data Analyst",
    company: "Global Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "As someone transitioning careers, the Data Science course provided me with all the skills I needed to break into the field. The curriculum is comprehensive and the hands-on projects gave me real-world experience."
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Marketing Director",
    company: "Brand Elevate",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "The Digital Marketing course was exactly what I needed to advance in my career. I implemented the strategies I learned and saw immediate results for my company. Highly recommend for any marketing professional."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of satisfied learners have transformed their careers with our courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="flex text-yellow-400 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
          >
            Read more success stories
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
