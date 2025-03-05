import React from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Lost 30 lbs in 6 months',
      content: 'Fitness Fuel completely transformed my approach to health. The personalized meal plans and workout routines made it easy to stay consistent and see real results.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Gained 15 lbs of muscle',
      content: 'As someone who struggled to gain weight, the nutrition guidance from Fitness Fuel was a game-changer. The app helped me track my progress and stay motivated.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marathon runner',
      content: 'The training plans in Fitness Fuel helped me prepare for my first marathon. The nutrition tips and recovery strategies were essential to my success.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    }
  ];

  return (
    <section className="py-20 bg-dark-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Success Stories from Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from people who have transformed their lives with Fitness Fuel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-dark-400 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-primary-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;