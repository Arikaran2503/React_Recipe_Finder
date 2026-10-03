import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-brown-950 text-beige mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <span className="text-2xl" aria-hidden="true">🍲</span>
            <span className="font-display text-xl font-semibold">RecipeFinder</span>
          </Link>
          <p className="text-sm text-brown-400">
            Discover, save and cook recipes from around the world, all in one
            place.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm tracking-wide">Explore</h4>
          <ul className="space-y-2 text-sm text-brown-400">
            <li><Link to="/recipes" className="hover:text-orange-400 transition-colors">All Recipes</Link></li>
            <li><Link to="/categories" className="hover:text-orange-400 transition-colors">Categories</Link></li>
            <li><Link to="/favorites" className="hover:text-orange-400 transition-colors">Favorites</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm tracking-wide">Company</h4>
          <ul className="space-y-2 text-sm text-brown-400">
            <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
            <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm tracking-wide">Categories</h4>
          <ul className="space-y-2 text-sm text-brown-400">
            <li><Link to="/recipes?category=Indian" className="hover:text-orange-400 transition-colors">Indian</Link></li>
            <li><Link to="/recipes?category=Italian" className="hover:text-orange-400 transition-colors">Italian</Link></li>
            <li><Link to="/recipes?category=Desserts" className="hover:text-orange-400 transition-colors">Desserts</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brown-800 py-5 text-center text-xs text-brown-500">
        © {new Date().getFullYear()} RecipeFinder. Built for cooks who love good food.
      </div>
    </footer>
  );
}

export default Footer;
