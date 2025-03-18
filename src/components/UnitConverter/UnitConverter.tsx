import React, { useEffect } from "react";
import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";
import { useConverterStore } from "../../store/converterStore";
import { useThemeStore } from "../../store/themeStore";

export const UnitConverter: React.FC = () => {
  const initialize = useConverterStore((state) => state.initialize);
  const { theme } = useThemeStore();

  useEffect(() => {
    initialize();
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [initialize, theme]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8 sm:mb-12">
          تبدیل واحدها
        </h1>
        <ConversionForm />
        <ConversionResult />
      </div>
    </div>
  );
};
