import React from "react";

// Reusable section heading with an optional eyebrow and subtitle,
// used across Home, Recipes and Categories for consistent spacing.
function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-10 ${alignment}`}>
      {eyebrow && (
        <p className="text-orange-600 dark:text-orange-400 font-semibold text-sm mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-brown-900 dark:text-cream">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brown-600 dark:text-brown-400 mt-3 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
