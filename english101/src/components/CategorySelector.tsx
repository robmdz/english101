import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories: Category[] = [
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'animals', name: 'Animals', icon: '🐘' },
    { id: 'verbs', name: 'Verbs', icon: '🏃' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'food', name: 'Food', icon: '🍔' },
    { id: 'colors', name: 'Colors', icon: '🎨' },
    { id: 'numbers', name: 'Numbers', icon: '123' },
    { id: 'weather', name: 'Weather', icon: '🌤️' },
    { id: 'clothes', name: 'Clothes', icon: '👕' },
    { id: 'jobs', name: 'Jobs', icon: '💼' },
    { id: 'places', name: 'Places', icon: '🏛️' },
    { id: 'emotions', name: 'Emotions', icon: '😊' }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center
              ${selectedCategory === category.id 
                ? 'bg-purple-600 border-purple-400 text-white' 
                : 'bg-gray-800 border-purple-500 text-white hover:bg-gray-700'
              }`}
          >
            <span className="text-2xl mb-2">{category.icon}</span>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector; 