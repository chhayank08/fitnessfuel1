import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AuthModal from '../AuthModal';

const Hero: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  return (
    <section className="bg-dark-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock Your Health and Fitness Potential
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Fitness Fuel offers personalized diet and exercise plans tailored to your unique needs. 
              Experience the convenience of meal planning and track your progress towards your fitness goals.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl">Health Improvement</h3>
                <p className="mt-2 text-gray-400">
                  Boost your overall health with customized nutrition and fitness recommendations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Meal Planning</h3>
                <p className="mt-2 text-gray-400">
                  Easily plan your meals with our intuitive and user-friendly interface.
                </p>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setAuthModalOpen(true)}
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition duration-200"
              >
                Join Now
              </button>
              <button className="group flex items-center justify-center text-primary-400 hover:text-primary-300 font-medium py-3 px-6 rounded-md border border-primary-400 hover:border-primary-300 transition duration-200">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Fitness tracking and meal planning" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode="signUp"
      />
    </section>
  );
};

export default Hero;