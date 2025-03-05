import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';

type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  weight: number | null;
  height: number | null;
  goal: string | null;
};

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [formData, setFormData] = useState({
    full_name: '',
    weight: '',
    height: '',
    goal: '',
  });
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      
      if (!user) return;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        throw error;
      }
      
      if (data) {
        setProfile(data);
        setFormData({
          full_name: data.full_name || '',
          weight: data.weight ? String(data.weight) : '',
          height: data.height ? String(data.height) : '',
          goal: data.goal || '',
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      if (!user) return;
      
      const updates = {
        id: user.id,
        full_name: formData.full_name,
        weight: formData.weight ? parseFloat(formData.weight) : null,
        height: formData.height ? parseFloat(formData.height) : null,
        goal: formData.goal,
        updated_at: new Date().toISOString(),
      };
      
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);
      
      if (error) {
        throw error;
      }
      
      setMessage({ text: 'Profile updated successfully!', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ text: 'Error updating profile. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profile) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Your Profile</h1>
      
      {message && (
        <div className={`p-4 mb-6 rounded-md ${message.type === 'success' ? 'bg-green-500 bg-opacity-20 text-green-500' : 'bg-secondary-500 bg-opacity-20 text-secondary-500'}`}>
          {message.text}
        </div>
      )}
      
      <div className="bg-dark-500 rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full p-3 bg-dark-400 border border-dark-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full p-3 bg-dark-400 border border-dark-300 rounded-md text-gray-400 cursor-not-allowed"
              />
              <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
            </div>
            
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-300 mb-1">
                Weight (lbs)
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-3 bg-dark-400 border border-dark-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-300 mb-1">
                Height (cm)
              </label>
              <input
                id="height"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                className="w-full p-3 bg-dark-400 border border-dark-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-1">
                Fitness Goal
              </label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full p-3 bg-dark-400 border border-dark-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select a goal</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="maintain">Maintain Weight</option>
                <option value="improve_fitness">Improve Overall Fitness</option>
                <option value="athletic_performance">Athletic Performance</option>
              </select>
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 disabled:opacity-70"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-8 bg-dark-500 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
        
        <div className="space-y-4">
          <button className="w-full md:w-auto bg-transparent hover:bg-dark-400 text-white font-medium py-2 px-4 rounded-md border border-dark-300 transition duration-200">
            Change Password
          </button>
          
          <button className="w-full md:w-auto bg-transparent hover:bg-secondary-500 text-secondary-500 hover:text-white font-medium py-2 px-4 rounded-md border border-secondary-500 transition duration-200">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;