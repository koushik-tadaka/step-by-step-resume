
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Sarah Johnson",
    category: "Development",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 89.99,
    rating: 4.8,
    students: 15420,
    hours: 42,
    level: "Beginner to Advanced",
    bestseller: true
  },
  {
    id: 2,
    title: "Data Science and Machine Learning",
    instructor: "Prof. Michael Chen",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 94.99,
    rating: 4.9,
    students: 12840,
    hours: 38,
    level: "Intermediate",
    bestseller: true
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    instructor: "Emma Roberts",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 74.99,
    rating: 4.7,
    students: 9870,
    hours: 28,
    level: "All Levels",
    bestseller: false
  },
  {
    id: 4,
    title: "Financial Accounting Principles",
    instructor: "Robert Anderson",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 69.99,
    rating: 4.6,
    students: 7540,
    hours: 32,
    level: "Beginner",
    bestseller: false
  }
];

const PopularCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular Courses
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Explore our most in-demand courses chosen by thousands of learners
            </p>
          </div>
          <button className="text-indigo-600 font-semibold hover:text-indigo-800 hidden sm:block">
            View All Courses
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.bestseller && (
                  <Badge className="absolute top-4 left-4 bg-yellow-500 hover:bg-yellow-600">
                    Bestseller
                  </Badge>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <Badge className="bg-white text-indigo-700 hover:bg-gray-100">{course.category}</Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                
                <div className="flex items-center text-sm mb-2">
                  <span className="text-yellow-500 font-bold">{course.rating}</span>
                  <div className="flex ml-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} 
                        className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-gray-500">({course.students.toLocaleString()})</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.hours} hours</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 border-t border-gray-100 flex justify-between items-center">
                <span className="font-bold text-lg">${course.price}</span>
                <button className="text-sm px-3 py-1 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50 transition-colors">
                  Add to Cart
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
            Browse All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
