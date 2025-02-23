import { useState, useMemo } from 'react';
import recipes from '../data/recipe';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';

const categories = ['ALL', 'APPETIZERS', 'ENTREES', 'MAIN COURSES', 'SIDE DISHES', 'DESSERTS'];

function Home() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Optimized filtering using useMemo
  const filteredRecipes = useMemo(() => {
    return recipes.filter(
      (recipe) =>
        (activeCategory === 'ALL' || recipe.category === activeCategory) &&
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Explore Recipes</h1>

        {/* Category Buttons */}
        <div className="flex space-x-6 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredRecipes.map((recipe, index) => (
    <RecipeCard key={recipe.id} recipe={recipe} index={index} />
  ))}
</div>

      </main>
    </div>
  );
}

export default Home;
