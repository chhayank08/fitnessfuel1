import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signIn' | 'signUp'>('signIn');
  const { user, signOut } = useAuth();

  const openAuthModal = (mode: 'signIn' | 'signUp') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <nav className="bg-dark-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold">Fitness Fuel</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-400">
              Home
            </Link>
            <Link to="/features" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-400">
              Features
            </Link>
            <Link to="/pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-400">
              Pricing
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="px-4 py-2 rounded-md text-sm font-medium bg-primary-500 hover:bg-primary-600 transition duration-150"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => signOut()}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-400"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => openAuthModal('signIn')}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-400"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => openAuthModal('signUp')}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-primary-500 hover:bg-primary-600 transition duration-150"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-500 pb-3 px-2 pt-2">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          
          {user ? (
            <>
              <Link 
                to="/dashboard" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary-500 hover:bg-primary-600 mt-1 transition duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button 
                onClick={() => {
                  signOut();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-dark-400 mt-1"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => {
                  openAuthModal('signIn');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-dark-400 mt-1"
              >
                Sign In
              </button>
              <button 
                onClick={() => {
                  openAuthModal('signUp');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary-500 hover:bg-primary-600 mt-1 transition duration-150"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </nav>
  );
};

export default Navbar;