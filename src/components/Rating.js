import React from "react";

// Displays a star rating with the numeric value. Props-driven and reusable.
function Rating({ value, size = "sm" }) {
  const rounded = Math.round(value);
  const starSize = size === "lg" ? "text-lg" : "text-sm";

  return (
    <span
      className={`inline-flex items-center gap-1 ${starSize} font-medium text-brown-800 dark:text-beige`}
      aria-label={`Rated ${value} out of 5`}
    >
      <span className="text-orange-500" aria-hidden="true">
        {"★".repeat(rounded)}
        {"☆".repeat(5 - rounded)}
      </span>
      <span className="text-xs text-brown-600 dark:text-brown-400">
        {value.toFixed(1)}
      </span>
    </span>
  );
}

export default Rating;
