import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";
import FavoriteButton from "../components/FavoriteButton";
import Rating from "../components/Rating";
import RecipeCard from "../components/RecipeCard";
import EmptyState from "../components/EmptyState";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes } = useRecipes();
  const [copied, setCopied] = useState(false);

  const recipe = useMemo(
    () => recipes.find((r) => String(r.id) === String(id)),
    [recipes, id]
  );

  const relatedRecipes = useMemo(() => {
    if (!recipe) return [];
    return recipes
      .filter((r) => r.category === recipe.category && r.id !== recipe.id)
      .slice(0, 4);
  }, [recipes, recipe]);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24">
        <EmptyState
          icon="🚫"
          title="Recipe Not Found"
          subtitle="The recipe you're looking for doesn't exist or may have been removed."
          actionLabel="Back to Recipes"
          actionTo="/recipes"
        />
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: recipe.name, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.warn("Share was cancelled or failed.", error);
    }
  };

  const totalTime = recipe.cookingTime + recipe.preparationTime;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <button
        type="button"
        onClick={() => navigate("/recipes")}
        className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-6 inline-flex items-center gap-1 hover:underline"
      >
        ← Back to Recipes
      </button>

      <div className="grid lg:grid-cols-2 gap-10 mb-14">
        <div className="relative rounded-3xl overflow-hidden shadow-lift h-80 lg:h-full">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <FavoriteButton
            recipeId={recipe.id}
            size="lg"
            className="absolute top-4 right-4"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-block w-fit bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {recipe.category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-brown-900 dark:text-cream mb-3">
            {recipe.name}
          </h1>
          <p className="text-brown-600 dark:text-brown-400 mb-4">
            {recipe.description}
          </p>
          <Rating value={recipe.rating} size="lg" />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <MetaBadge label="Cook Time" value={`${recipe.cookingTime} min`} />
            <MetaBadge label="Prep Time" value={`${recipe.preparationTime} min`} />
            <MetaBadge label="Total Time" value={`${totalTime} min`} />
            <MetaBadge label="Difficulty" value={recipe.difficulty} />
            <MetaBadge label="Servings" value={recipe.servings} />
            <MetaBadge label="Category" value={recipe.category} />
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="mt-8 w-fit bg-brown-900 dark:bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            {copied ? "Link copied!" : "Share Recipe"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 mb-16">
        <div className="bg-white dark:bg-brown-900 rounded-2xl shadow-card p-6">
          <h2 className="font-display text-xl font-semibold text-brown-900 dark:text-cream mb-4">
            Ingredients
          </h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-brown-700 dark:text-brown-300"
              >
                <span className="text-orange-500 mt-0.5" aria-hidden="true">●</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-brown-900 rounded-2xl shadow-card p-6">
          <h2 className="font-display text-xl font-semibold text-brown-900 dark:text-cream mb-4">
            Instructions
          </h2>
          <ol className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="text-sm text-brown-700 dark:text-brown-300 pt-0.5">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {relatedRecipes.length > 0 && (
        <div>
          <h2 className="font-display text-2xl font-semibold text-brown-900 dark:text-cream mb-6">
            You Might Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedRecipes.map((related) => (
              <RecipeCard key={related.id} recipe={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MetaBadge({ label, value }) {
  return (
    <div className="bg-beige dark:bg-brown-900 rounded-xl px-4 py-3">
      <p className="text-xs text-brown-500 dark:text-brown-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-brown-900 dark:text-cream">{value}</p>
    </div>
  );
}

export default RecipeDetails;
