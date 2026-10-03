import React from "react";
import { useNavigate } from "react-router-dom";

const CATEGORY_META = {
  Breakfast: { emoji: "🍳", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80" },
  Indian: { emoji: "🍛", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80" },
  Italian: { emoji: "🍝", image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=600&q=80" },
  "Fast Food": { emoji: "🍔", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80" },
  Healthy: { emoji: "🥗", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
  Desserts: { emoji: "🍰", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80" },
  Chinese: { emoji: "🥟", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80" },
  Drinks: { emoji: "🥤", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80" },
};

// Reusable category tile. `name` and `count` come in via props;
// clicking navigates to the filtered Recipes page.
function CategoryCard({ name, count }) {
  const navigate = useNavigate();
  const meta = CATEGORY_META[name] || { emoji: "🍽", image: "" };

  const handleExplore = () => {
    navigate(`/recipes?category=${encodeURIComponent(name)}`);
  };

  return (
    <button
      type="button"
      onClick={handleExplore}
      className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1 text-left"
    >
      <div className="h-36 w-full overflow-hidden">
        <img
          src={meta.image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-brown-950/10 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="text-2xl mb-1">{meta.emoji}</div>
        <h3 className="font-display text-lg font-semibold">{name}</h3>
        <p className="text-xs text-white/80">{count} recipes</p>
      </div>
      <span className="absolute top-3 right-3 bg-white/90 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        Explore →
      </span>
    </button>
  );
}

export default CategoryCard;
