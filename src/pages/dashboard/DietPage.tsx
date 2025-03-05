import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';

type DietPlan = {
  id: string;
  name: string;
  description: string | null;
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
  created_at: string;
};

const DietPage: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    if (user) {
      fetchDietPlans();
    }
  }, [user]);
  
  const fetchDietPlans = async () => {
    try {
      setLoading(true);
      
      if (!user) return;
      
      const { data, error } = await supabase
        .from('diet_plans')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      if (data) {
        setDietPlans(data);
      }
    } catch (error) {
      console.error('Error fetching diet plans:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const filteredDietPlans = dietPlans.filter(plan => 
    plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (plan.description && plan.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Diet Plans</h1>
          <p className="text-gray-400 mt-1">Manage your nutrition and meal plans</p>
        </div>
        
        <button className="mt-4 md:mt-0 flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">
          <Plus className="mr-2 h-5 w-5" />
          Create New Plan
        </button>
      </div>
      
      {/* Search and filters */}
      <div className="bg-dark-500 rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search diet plans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full p-2 bg-dark-400 border border-dark-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <select className="p-2 bg-dark-400 border border-dark-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="all">All Plans</option>
            <option value="high_protein">High Protein</option>
            <option value="low_carb">Low Carb</option>
            <option value="keto">Keto</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      ) : filteredDietPlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDietPlans.map((plan) => (
            <div key={plan.id} className="bg-dark-500 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                {plan.description && (
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                )}
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Calories</p>
                    <p className="text-white font-medium">{plan.calories || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Protein</p>
                    <p className="text-white font-medium">{plan.protein ? `${plan.protein}g` : 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Carbs</p>
                    <p className="text-white font-medium">{plan.carbs ? `${plan.carbs}g` : 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Fat</p>
                    <p className="text-white font-medium">{plan.fat ? `${plan.fat}g` : 'N/A'}</p>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="flex items-center text-primary-400 hover:text-primary-300 transition duration-150">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                  <button className="flex items-center text-secondary-500 hover:text-secondary-400 transition duration-150">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-dark-500 rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-300 mb-4">No diet plans found. Create your first plan to get started!</p>
          <button className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">
            <Plus className="mr-2 h-5 w-5" />
            Create New Plan
          </button>
        </div>
      )}
    </div>
  );
};

export default DietPage;