import React, { useState } from "react";
import { useRecipes } from "../context/RecipeContext";

// A reusable heart toggle. Receives the recipe id via props and reads/writes
// global favorite state through the RecipeContext.
function FavoriteButton({ recipeId, size = "md", className = "" }) {
  const { isFavorite, toggleFavorite } = useRecipes();
  const [justToggled, setJustToggled] = useState(false);
  const active = isFavorite(recipeId);

  const dimensions = size === "lg" ? "w-12 h-12 text-2xl" : "w-9 h-9 text-lg";

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(recipeId);
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 400);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className={`${dimensions} flex items-center justify-center rounded-full border transition-colors duration-200
        ${
          active
            ? "bg-orange-500 border-orange-500 text-white"
            : "bg-white/90 border-beige text-brown-600 hover:border-orange-400 hover:text-orange-500"
        }
        shadow-card ${className}`}
    >
      <span className={justToggled ? "animate-heartPop" : ""}>
        {active ? "♥" : "♡"}
      </span>
    </button>
  );
}

export default FavoriteButton;
