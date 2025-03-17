import React, { useEffect } from "react";
import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";
import { useConverterStore } from "../../store/converterStore";
import { useThemeStore } from "../../store/themeStore";

export const UnitConverter: React.FC = () => {
  const initialize = useConverterStore((state) => state.initialize);
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    initialize();
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [initialize, theme]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center flex-1">
            تبدیل واحدها
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={
              theme === "light" ? "فعال‌سازی حالت تاریک" : "فعال‌سازی حالت روشن"
            }
          >
            {theme === "light" ? (
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <ConversionForm />
        <ConversionResult />
      </div>
    </div>
  );
};
