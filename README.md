# RecipeFinder

A modern, professional recipe discovery web app built with React.js — search,
filter, and save recipes from eight cuisines, all backed by local static
data and browser localStorage (no external API).

![RecipeFinder](https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&q=80)

## Description

RecipeFinder is a portfolio-quality food discovery site. Browse a curated
collection of 26 recipes across 8 categories, search and filter dynamically,
view full recipe details with ingredients and step-by-step instructions, and
save favorites that persist across page refreshes and browser restarts.

## Features

- Responsive landing page with animated hero, search bar and popular recipes
- Full recipe browsing page with live search and multi-criteria filtering
  (category, difficulty, cooking time, rating)
- Category grid that deep-links into filtered recipe results via URL query
  params
- Detailed recipe pages with ingredients, numbered instructions, favoriting,
  sharing and related recipes from the same category
- Favorites page with persistent storage and a friendly empty state
- Light and dark mode with a saved theme preference
- Sticky, responsive navbar with a mobile menu and live favorite count badge
- Graceful "Recipe Not Found" and 404 states
- Fully accessible: semantic HTML, alt text, aria-labels, visible focus states

## Technologies

- React.js (Create React App, `.js` files only, no TypeScript)
- React Router DOM (`BrowserRouter`, `Routes`, `useParams`, `useSearchParams`)
- Context API for global recipe/favorites/theme state
- Tailwind CSS for styling and responsive layout
- Browser `localStorage` for persistence

## React Concepts Used

- `useState` — search text, filters, mobile menu, share feedback
- `useEffect` — loading/saving favorites and theme to `localStorage`,
  syncing filters with the URL
- `useContext` — global recipe, favorites and theme state via
  `RecipeContext`
- `useParams` — reading the recipe `id` on the Recipe Details page
- `useSearchParams` — reading/writing `search` and `category` query params
- Props — `RecipeCard`, `CategoryCard`, `SearchBar`, `FilterBar`,
  `FavoriteButton`, `Rating`, `EmptyState` are all fully prop-driven and
  reusable

## Folder Structure

```
recipe-finder/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── RecipeCard.js
│   │   ├── CategoryCard.js
│   │   ├── SearchBar.js
│   │   ├── FilterBar.js
│   │   ├── FavoriteButton.js
│   │   ├── Rating.js
│   │   ├── Loading.js
│   │   ├── EmptyState.js
│   │   └── SectionTitle.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Recipes.js
│   │   ├── Categories.js
│   │   ├── RecipeDetails.js
│   │   ├── Favorites.js
│   │   ├── About.js
│   │   └── NotFound.js
│   ├── context/
│   │   └── RecipeContext.js
│   ├── data/
│   │   └── recipes.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Installation

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

To create a production build:

```bash
npm run build
```

## Future Improvements

- Add user-submitted recipes with an admin form
- Add ingredient-based "what can I cook" search
- Add print-friendly recipe view
- Add unit tests with React Testing Library
- Add pagination or infinite scroll for large recipe sets
