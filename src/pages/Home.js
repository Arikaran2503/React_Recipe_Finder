import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";
import SectionTitle from "../components/SectionTitle";
import { useRecipes } from "../context/RecipeContext";

const FEATURES = [
  {
    icon: "🔎",
    title: "Easy to Discover",
    text: "Search by name, ingredient, or category and find the right recipe in seconds.",
  },
  {
    icon: "⚡",
    title: "Quick Recipes",
    text: "Find quick recipes based on cooking time for busy days.",
  },
  {
    icon: "❤️",
    title: "Save Favorites",
    text: "Save your favorite dishes and easily find them again later.",
  },
  {
    icon: "🌍",
    title: "Multiple Categories",
    text: "Explore delicious recipes from Indian, Italian, Chinese, and more cuisines.",
  },
];

function Home() {
  const navigate = useNavigate();
  const { recipes = [] } = useRecipes();

  // Get the top-rated recipes
  const popularRecipes = [...recipes]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 8);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Popular Recipes */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <SectionTitle
            eyebrow="Loved by home cooks"
            title="Popular Recipes"
            subtitle="Our highest-rated dishes, picked by people who love cooking."
          />

          <button
            type="button"
            onClick={() => navigate("/recipes")}
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline"
          >
            View All Recipes →
          </button>
        </div>

        {popularRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No recipes available.
          </p>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            align="center"
            eyebrow="Why RecipeFinder"
            title="Everything you need to cook with confidence"
            subtitle="Simple tools that make finding and saving recipes easy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to Cook Something Amazing?
        </h2>

        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Browse our recipe collection and discover your next favorite meal.
        </p>

        <button
          type="button"
          onClick={() => navigate("/recipes")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-md transition-colors duration-300"
        >
          Explore Recipes
        </button>
      </section>
    </div>
  );
}

export default Home;

