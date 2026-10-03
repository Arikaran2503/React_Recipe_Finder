import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-28 text-center">
      <p className="text-6xl mb-4" aria-hidden="true">🍳</p>
      <h1 className="font-display text-3xl font-semibold text-brown-900 dark:text-cream mb-3">
        Page Not Found
      </h1>
      <p className="text-brown-600 dark:text-brown-400 mb-8">
        We couldn't find the page you're looking for. It may have been moved
        or doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
