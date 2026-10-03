import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/recipes", label: "Recipes" },
  { to: "/categories", label: "Categories" },
  { to: "/favorites", label: "Favorites" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const { favorites, theme, toggleTheme } = useRecipes();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `px-1 py-2 text-sm font-medium border-b-2 transition-colors ${
      isActive
        ? "text-orange-600 border-orange-500"
        : "text-brown-700 dark:text-brown-300 border-transparent hover:text-orange-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-cream/90 dark:bg-brown-950/90 backdrop-blur border-b border-beige dark:border-brown-800">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="text-2xl" aria-hidden="true">🍲</span>
          <span className="font-display text-xl font-semibold text-brown-900 dark:text-cream">
            RecipeFinder
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/favorites"
            aria-label="View favorites"
            className="relative hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-brown-900 shadow-card text-orange-500"
          >
            ♥
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </NavLink>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full bg-white dark:bg-brown-900 shadow-card flex items-center justify-center text-brown-700 dark:text-beige"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden w-10 h-10 rounded-full bg-white dark:bg-brown-900 shadow-card flex items-center justify-center text-brown-800 dark:text-beige"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-1 bg-cream dark:bg-brown-950">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-brown-700 dark:text-brown-300 hover:bg-orange-100 dark:hover:bg-brown-800"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
