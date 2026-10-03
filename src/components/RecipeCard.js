import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import FavoriteButton from "./FavoriteButton";

// Reusable recipe card used on Home, Recipes and related-recipe sections.
// Receives its data purely through the `recipe` prop.
function RecipeCard({ recipe }) {
  return (
    <div className="group bg-white dark:bg-brown-900 rounded-2xl shadow-card hover:shadow-lift transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link
        to={`/recipe/${recipe.id}`}
        className="relative block overflow-hidden h-48"
        aria-label={`View ${recipe.name} recipe`}
      >
        <img
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-brown-950/80 text-brown-800 dark:text-beige text-xs font-semibold px-3 py-1 rounded-full">
          {recipe.category}
        </span>
        <FavoriteButton
          recipeId={recipe.id}
          className="absolute top-3 right-3"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display text-lg font-semibold text-brown-900 dark:text-cream leading-snug">
            {recipe.name}
          </h3>
        </div>
        <p className="text-sm text-brown-600 dark:text-brown-400 line-clamp-2 mb-3">
          {recipe.description}
        </p>

        <div className="flex items-center gap-3 text-xs text-brown-600 dark:text-brown-400 mb-3">
          <span className="flex items-center gap-1">⏱ {recipe.cookingTime} min</span>
          <span className="flex items-center gap-1">📶 {recipe.difficulty}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-beige dark:border-brown-800">
          <Rating value={recipe.rating} />
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400 transition-colors"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
