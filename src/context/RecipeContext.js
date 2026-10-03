import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import recipes from "../data/recipes";

const RecipeContext = createContext(null);

const FAVORITES_KEY = "recipeFavorites";
const THEME_KEY = "recipeTheme";

// Safely read favorites from localStorage, guarding against missing
// or corrupted JSON so the app never crashes on load.
function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Could not read favorites from storage, resetting.", error);
    return [];
  }
}

function loadTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "dark" ? "dark" : "light";
  } catch (error) {
    return "light";
  }
}

export function RecipeProvider({ children }) {
  const [favorites, setFavorites] = useState(loadFavorites);
  const [theme, setTheme] = useState(loadTheme);

  // Persist favorites to localStorage whenever they change.
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.warn("Could not save favorites to storage.", error);
    }
  }, [favorites]);

  // Persist theme choice and reflect it on the <html> element.
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.warn("Could not save theme to storage.", error);
    }
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleFavorite = (recipeId) => {
    setFavorites((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const isFavorite = (recipeId) => favorites.includes(recipeId);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const favoriteRecipes = useMemo(
    () => recipes.filter((recipe) => favorites.includes(recipe.id)),
    [favorites]
  );

  const value = {
    recipes,
    favorites,
    favoriteRecipes,
    toggleFavorite,
    isFavorite,
    theme,
    toggleTheme,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used within a RecipeProvider");
  }
  return context;
}

export default RecipeContext;
