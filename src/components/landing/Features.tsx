import React from 'react';
import { Dumbbell, Utensils, BarChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Personalized Diet Plans Just for You',
      description: 'Receive customized meal plans that suit your lifestyle.',
      icon: <Utensils className="h-10 w-10 text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: 'Tailored Exercise Routines for Every Fitness Level',
      description: 'Engage in workouts designed specifically for your needs.',
      icon: <Dumbbell className="h-10 w-10 text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: 'Track Your Progress and Stay Motivated',
      description: 'Monitor your achievements and celebrate your milestones.',
      icon: <BarChart className="h-10 w-10 text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    }
  ];

  return (
    <section className="py-20 bg-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Discover Your Personalized Fitness Journey
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Fitness Fuel offers tailored solutions for your health goals. Experience a unique approach to fitness with our app.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark-500 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md transition duration-200">
            Learn More
          </button>
          <button className="ml-4 text-primary-400 hover:text-primary-300 font-medium py-3 px-8 rounded-md border border-primary-400 hover:border-primary-300 transition duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;