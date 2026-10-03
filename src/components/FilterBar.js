import React from "react";
import { CATEGORIES } from "../data/recipes";

const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const TIME_RANGES = [
  { label: "Any time", value: "All" },
  { label: "Under 20 min", value: "under20" },
  { label: "20–40 min", value: "20to40" },
  { label: "Over 40 min", value: "over40" },
];
const RATINGS = [
  { label: "Any rating", value: 0 },
  { label: "4.5 & up", value: 4.5 },
  { label: "4.0 & up", value: 4.0 },
];

// Pure, controlled filter bar. All filter state lives in the parent
// (Recipes page) and is passed down as props — no local state here.
function FilterBar({ filters, onChange, onClear }) {
  const { category, difficulty, time, minRating } = filters;

  return (
    <div className="bg-white dark:bg-brown-900 rounded-2xl shadow-card p-5 space-y-5">
      <div>
        <h3 className="text-sm font-semibold text-brown-800 dark:text-beige mb-2">
          Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onChange({ ...filters, category: cat })}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-orange-500 text-white"
                  : "bg-beige dark:bg-brown-800 text-brown-700 dark:text-brown-300 hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-brown-800 dark:text-beige mb-2">
          Difficulty
        </h3>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => onChange({ ...filters, difficulty: level })}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                difficulty === level
                  ? "bg-orange-500 text-white"
                  : "bg-beige dark:bg-brown-800 text-brown-700 dark:text-brown-300 hover:bg-orange-100"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-brown-800 dark:text-beige mb-2">
          Cooking Time
        </h3>
        <select
          value={time}
          onChange={(event) => onChange({ ...filters, time: event.target.value })}
          className="w-full bg-beige dark:bg-brown-800 text-brown-800 dark:text-brown-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400"
        >
          {TIME_RANGES.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-brown-800 dark:text-beige mb-2">
          Rating
        </h3>
        <select
          value={minRating}
          onChange={(event) =>
            onChange({ ...filters, minRating: Number(event.target.value) })
          }
          className="w-full bg-beige dark:bg-brown-800 text-brown-800 dark:text-brown-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400"
        >
          {RATINGS.map((r) => (
            <option key={r.label} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={onClear}
        className="w-full text-sm font-semibold text-orange-600 dark:text-orange-400 border border-orange-300 dark:border-orange-700 rounded-xl py-2 hover:bg-orange-50 dark:hover:bg-brown-800 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default FilterBar;
export { DIFFICULTIES, TIME_RANGES, RATINGS };
