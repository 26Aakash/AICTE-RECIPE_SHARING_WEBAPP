const Recipe = require("../models/Recipe");

exports.createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, category, image } = req.body;
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      category,
      image,
      createdBy: req.user.id,
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("createdBy", "name");
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("createdBy", "name");
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.likeRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    if (recipe.likes.includes(req.user.id)) {
      recipe.likes = recipe.likes.filter((id) => id.toString() !== req.user.id);
    } else {
      recipe.likes.push(req.user.id);
    }

    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

