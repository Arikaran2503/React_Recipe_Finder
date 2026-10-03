import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import { useRecipes } from "../context/RecipeContext";

const DEFAULT_FILTERS = {
  category: "All",
  difficulty: "All",
  time: "All",
  minRating: 0,
};

function matchesTime(time, cookingTime) {
  if (time === "under20") return cookingTime < 20;
  if (time === "20to40") return cookingTime >= 20 && cookingTime <= 40;
  if (time === "over40") return cookingTime > 40;
  return true;
}

function Recipes() {
  const { recipes } = useRecipes();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState(searchParams.get("search") || "");
  const [filters, setFilters] = useState({
    ...DEFAULT_FILTERS,
    category: searchParams.get("category") || "All",
  });

  // Keep the URL query params synchronized with the UI state, so filters
  // and search are shareable/bookmarkable without a full page reload.
  useEffect(() => {
    const params = {};
    if (searchText.trim()) params.search = searchText.trim();
    if (filters.category !== "All") params.category = filters.category;
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, filters.category]);

  // React to a category coming in from an external link (e.g. Categories page).
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory && urlCategory !== filters.category) {
      setFilters((prev) => ({ ...prev, category: urlCategory }));
    }
    const urlSearch = searchParams.get("search");
    if (urlSearch && urlSearch !== searchText) {
      setSearchText(urlSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRecipes = useMemo(() => {
    const term = searchText.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesSearch =
        !term ||
        recipe.name.toLowerCase().includes(term) ||
        recipe.category.toLowerCase().includes(term) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(term)
        );

      const matchesCategory =
        filters.category === "All" || recipe.category === filters.category;
      const matchesDifficulty =
        filters.difficulty === "All" || recipe.difficulty === filters.difficulty;
      const matchesTimeRange = matchesTime(filters.time, recipe.cookingTime);
      const matchesRating = recipe.rating >= filters.minRating;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDifficulty &&
        matchesTimeRange &&
        matchesRating
      );
    });
  }, [recipes, searchText, filters]);

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchText("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-brown-900 dark:text-cream mb-2">
          Explore Recipes
        </h1>
        <p className="text-brown-600 dark:text-brown-400 max-w-xl">
          Browse our full collection of {recipes.length} recipes, or search
          and filter to find exactly what you're craving.
        </p>
      </div>

      <div className="max-w-xl mb-10">
        <SearchBar
          value={searchText}
          onChange={setSearchText}
          onSubmit={setSearchText}
          placeholder="Search by name, category or ingredient..."
        />
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside>
          <FilterBar filters={filters} onChange={setFilters} onClear={clearFilters} />
        </aside>

        <div>
          <p className="text-sm text-brown-500 dark:text-brown-400 mb-4">
            {filteredRecipes.length} recipe
            {filteredRecipes.length !== 1 ? "s" : ""} found
          </p>

          {filteredRecipes.length === 0 ? (
            <EmptyState
              icon="🍽"
              title="No recipes found"
              subtitle="Try a different search term or adjust your filters to see more results."
              actionLabel="Clear Filters"
              onAction={clearFilters}
            />
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
