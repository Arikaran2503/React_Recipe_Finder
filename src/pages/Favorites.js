import React from "react";
import RecipeCard from "../components/RecipeCard";
import EmptyState from "../components/EmptyState";
import { useRecipes } from "../context/RecipeContext";

function Favorites() {
  const { favoriteRecipes } = useRecipes();

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-brown-900 dark:text-cream mb-2">
          Your Favorites
        </h1>
        <p className="text-brown-600 dark:text-brown-400">
          {favoriteRecipes.length > 0
            ? `You have ${favoriteRecipes.length} saved recipe${favoriteRecipes.length !== 1 ? "s" : ""}.`
            : "Recipes you save will show up here."}
        </p>
      </div>

      {favoriteRecipes.length === 0 ? (
        <EmptyState
          icon="❤️"
          title="No Favorites Yet ❤️"
          subtitle="Start saving your favorite recipes and they will appear here."
          actionLabel="Explore Recipes"
          actionTo="/recipes"
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
