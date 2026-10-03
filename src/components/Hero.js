import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (term) => {
    const trimmed = term.trim();
    navigate(trimmed ? `/recipes?search=${encodeURIComponent(trimmed)}` : "/recipes");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-cream dark:from-brown-950 dark:to-brown-900">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeUp">
          <p className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            24+ hand-picked recipes, ready when you are
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-brown-900 dark:text-cream leading-tight mb-5">
            Find Your Perfect Recipe
          </h1>
          <p className="text-brown-600 dark:text-brown-400 text-lg mb-8 max-w-md">
            Search by name, ingredient or craving, and discover dishes from
            eight cuisines you can save and cook again and again.
          </p>

          <div className="max-w-lg mb-6">
            <SearchBar value={query} onChange={setQuery} onSubmit={handleSearch} large />
          </div>

          <button
            type="button"
            onClick={() => navigate("/recipes")}
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:gap-3 transition-all"
          >
            Explore Recipes <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="relative animate-fadeUp" style={{ animationDelay: "0.15s" }}>
          <div className="rounded-[2rem] overflow-hidden shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=900&q=80"
              alt="A beautifully plated dish surrounded by fresh ingredients"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-brown-900 rounded-2xl shadow-card px-5 py-4 hidden sm:block">
            <p className="text-2xl font-display font-semibold text-brown-900 dark:text-cream">4.8★</p>
            <p className="text-xs text-brown-500 dark:text-brown-400">Average recipe rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
