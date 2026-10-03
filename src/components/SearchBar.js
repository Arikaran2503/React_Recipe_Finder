import React from "react";

// Controlled search input. Value and change handler are passed via props
// so it can be reused on the Home hero and the Recipes page.
function SearchBar({ value, onChange, onSubmit, placeholder, large = false }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) onSubmit(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center bg-white rounded-full shadow-card overflow-hidden border border-beige focus-within:border-orange-400 transition-colors ${
        large ? "p-2" : "p-1"
      }`}
      role="search"
    >
      <span className={`pl-4 text-brown-400 ${large ? "text-xl" : "text-base"}`} aria-hidden="true">
        🔍
      </span>
      <label htmlFor="recipe-search" className="sr-only">
        Search recipes
      </label>
      <input
        id="recipe-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder || "Search recipes, ingredients or categories..."}
        className={`flex-1 bg-transparent outline-none text-brown-900 placeholder-brown-400 px-3 ${
          large ? "py-3 text-base" : "py-2 text-sm"
        }`}
      />
      <button
        type="submit"
        className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors ${
          large ? "px-6 py-3" : "px-4 py-2 text-sm"
        }`}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
