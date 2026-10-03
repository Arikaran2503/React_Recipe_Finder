import React from "react";

// Small reusable loading indicator (used for brief perceived-loading states).
function Loading({ label = "Loading recipes..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-20" role="status" aria-live="polite">
      <div className="w-10 h-10 border-4 border-beige border-t-orange-500 rounded-full animate-spin mb-3" />
      <p className="text-sm text-brown-600 dark:text-brown-400">{label}</p>
    </div>
  );
}

export default Loading;
