import React, { useMemo } from "react";
import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
import { useRecipes } from "../context/RecipeContext";
import { CATEGORIES } from "../data/recipes";

function Categories() {
  const { recipes } = useRecipes();

  const counts = useMemo(() => {
    return CATEGORIES.reduce((acc, category) => {
      acc[category] = recipes.filter((r) => r.category === category).length;
      return acc;
    }, {});
  }, [recipes]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <SectionTitle
        eyebrow="Browse by cuisine"
        title="Categories"
        subtitle="Pick a cuisine to jump straight to matching recipes."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category} name={category} count={counts[category] || 0} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
