import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipe';

const RecipeDetails = () => {
    const { id } = useParams(); // Get the recipe ID from the URL
    const recipe = recipes.find((r) => r.id === parseInt(id)); // Find the recipe by ID
  
    if (!recipe) {
      return <h2 className="text-center text-xl font-semibold mt-10">Recipe Not Found!</h2>;
    }
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
  
        {/* Category, Duration, Servings, and Difficulty */}
        <div className="flex flex-wrap items-center space-x-4 mb-6">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{recipe.category}</span>
          <span className="text-gray-600">⏳ {recipe.duration}</span>
          <span className="text-gray-600">🍽 Servings: {recipe.servings}</span>
          <span className={`text-gray-600 ${recipe.difficulty === 'Easy' ? 'text-green-500' : recipe.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
            🔥 {recipe.difficulty}
          </span>
        </div>
  
        {/* Ingredients */}
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
  
        {/* Instructions */}
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
  
        {/* Nutrition Info */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">Nutrition Facts</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
          <p>📊 Calories: {recipe.nutrition.calories} kcal</p>
          <p>💪 Protein: {recipe.nutrition.protein}</p>
          <p>🥖 Carbs: {recipe.nutrition.carbs}</p>
          <p>🥑 Fats: {recipe.nutrition.fats}</p>
        </div>
      </div>
    );
  };
  
  export default RecipeDetails;

