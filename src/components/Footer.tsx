import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-500 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">Fitness Fuel</span>
            </Link>
            <p className="mt-4 text-sm">
              Personalized fitness solutions to help you achieve your health and wellness goals.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary-400 transition duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-400 transition duration-150">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-primary-400 transition duration-150">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-primary-400 transition duration-150">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm hover:text-primary-400 transition duration-150">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nutrition" className="text-sm hover:text-primary-400 transition duration-150">
                  Nutrition Tips
                </Link>
              </li>
              <li>
                <Link to="/workouts" className="text-sm hover:text-primary-400 transition duration-150">
                  Workout Guides
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-sm hover:text-primary-400 transition duration-150">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm hover:text-primary-400 transition duration-150">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm hover:text-primary-400 transition duration-150">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Join our newsletter to stay updated on features and releases.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-dark-400 border border-dark-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-2">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
        
        <hr className="border-dark-400 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fitness Fuel. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs hover:text-primary-400 transition duration-150">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs hover:text-primary-400 transition duration-150">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs hover:text-primary-400 transition duration-150">
              Cookies Settings
            </Link>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-150">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-150">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-150">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-150">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition duration-150">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;