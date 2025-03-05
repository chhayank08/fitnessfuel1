import React, { useState } from 'react';
import AuthModal from '../AuthModal';

const CallToAction: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  return (
    <section className="py-20 bg-gradient-to-r from-dark-500 via-dark-400 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Transform Your Fitness Journey with Personalization
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            At Fitness Fuel, we believe that one size does not fit all. Our app tailors diet and exercise plans to your unique needs, helping you achieve your fitness goals effectively.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setAuthModalOpen(true)}
              className="bg-white hover:bg-gray-100 text-dark-500 font-medium py-3 px-8 rounded-md transition duration-200"
            >
              Get Started
            </button>
            <button className="bg-transparent hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-md border border-white hover:border-primary-600 transition duration-200">
              Learn More
            </button>
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

export default CallToAction;