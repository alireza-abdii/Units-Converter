import React from "react";
import { useThemeStore } from "../../store/themeStore";
import { useLanguageStore } from "../../store/languageStore";
import { Link } from "react-router-dom";
import { translations } from "../../translations";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language];

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm" dir="rtl">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-slate-100"
            >
              {t.title}
            </Link>
            <Link
              to="/history"
              className="text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 transition-colors text-sm"
            >
              {t.history}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
              aria-label="Toggle language"
            >
              {language === "fa" ? "En" : "Fa"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
              aria-label={
                theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
              }
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5"
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
              ) : (
                <svg
                  className="w-5 h-5"
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
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
