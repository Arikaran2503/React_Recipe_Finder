import React from "react";
import { Link } from "react-router-dom";

// Generic, reusable empty-state block. Icon, title, subtitle and the
// action button are all supplied via props so it fits several pages.
function EmptyState({ icon = "🍽", title, subtitle, actionLabel, actionTo, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white dark:bg-brown-900 rounded-2xl shadow-card">
      <div className="text-5xl mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-brown-900 dark:text-cream mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-brown-600 dark:text-brown-400 max-w-sm mb-6">
          {subtitle}
        </p>
      )}
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
        >
          {actionLabel}
        </Link>
      )}
      {actionLabel && onAction && !actionTo && (
        <button
          type="button"
          onClick={onAction}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
