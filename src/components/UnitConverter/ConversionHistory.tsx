import React from "react";
import { useConverterStore } from "../../store/converterStore";
import { useLanguageStore } from "../../store/languageStore";
import { translations } from "../../translations";
import { getUnitLabel } from "../../utils/unitLabels";

export const ConversionHistory: React.FC = () => {
  const { history, removeFromHistory, clearHistory } = useConverterStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  if (history.length === 0) return null;

  return (
    <div className="mt-8 space-y-6">
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          تاریخچه تبدیل‌ها
        </h3>
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <div>
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.inputValue} {getUnitLabel(item.fromUnit, item.type)} ={" "}
                  {item.outputValue.toFixed(6)}{" "}
                  {getUnitLabel(item.toUnit, item.type)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.timestamp).toLocaleString("fa-IR")}
                </div>
              </div>
              <button
                onClick={() => removeFromHistory(item.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="حذف از تاریخچه"
              >
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      {history.length > 0 && (
        <div className="flex justify-end mb-4">
          <button
            onClick={clearHistory}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
          >
            {t.clearHistory}
          </button>
        </div>
      )}
    </div>
  );
};
