import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const TECH = [
  "React.js & React Hooks",
  "React Router DOM",
  "Context API",
  "Tailwind CSS",
  "Browser localStorage",
  "Create React App",
];

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SectionTitle
        eyebrow="About Us"
        title="About RecipeFinder"
        subtitle="A recipe discovery app built for people who love to cook — and want to keep track of the dishes they love."
      />

      <div className="grid sm:grid-cols-2 gap-8 mb-14">
        <div className="bg-white dark:bg-brown-900 rounded-2xl shadow-card p-6">
          <h3 className="font-display text-xl font-semibold text-brown-900 dark:text-cream mb-2">
            Our Mission
          </h3>
          <p className="text-sm text-brown-600 dark:text-brown-400">
            We believe finding a great recipe shouldn't take longer than
            cooking it. RecipeFinder brings together recipes from eight
            cuisines with fast search, clear instructions and a favorites
            list you can always come back to.
          </p>
        </div>
        <div className="bg-white dark:bg-brown-900 rounded-2xl shadow-card p-6">
          <h3 className="font-display text-xl font-semibold text-brown-900 dark:text-cream mb-2">
            Features
          </h3>
          <ul className="text-sm text-brown-600 dark:text-brown-400 space-y-1.5">
            <li>• Search and filter recipes instantly</li>
            <li>• Browse by category or meal type</li>
            <li>• Save favorites that persist across visits</li>
            <li>• Detailed ingredients and step-by-step instructions</li>
            <li>• Light and dark mode</li>
          </ul>
        </div>
      </div>

      <div className="bg-beige dark:bg-brown-900 rounded-2xl p-8 mb-14">
        <h3 className="font-display text-xl font-semibold text-brown-900 dark:text-cream mb-4">
          Technology Used
        </h3>
        <div className="flex flex-wrap gap-3">
          {TECH.map((tech) => (
            <span
              key={tech}
              className="bg-white dark:bg-brown-950 text-brown-700 dark:text-brown-300 text-sm font-medium px-4 py-2 rounded-full shadow-card"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/recipes"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Start Exploring Recipes
        </Link>
      </div>
    </div>
  );
}

export default About;
