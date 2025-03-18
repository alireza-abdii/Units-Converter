import React from "react";
import { useConverterStore } from "../../store/converterStore";
import { getUnitLabel } from "../../utils/unitLabels";

export const ConversionResult: React.FC = () => {
  const {
    result,
    history,
    favorites,
    addToFavorites,
    removeFromFavorites,
    removeFromHistory,
    fromUnit,
    toUnit,
    unitType,
  } = useConverterStore();

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  if (!result) return null;

  const isFavorite = favorites.some(
    (f) =>
      f.fromUnit === fromUnit && f.toUnit === toUnit && f.unitType === unitType
  );

  return (
    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          نتیجه تبدیل
        </h2>
        <button
          onClick={() => addToFavorites({ fromUnit, toUnit, unitType })}
          className={`p-2 rounded-lg transition-colors ${
            isFavorite
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-gray-400 hover:text-gray-500"
          }`}
          aria-label={
            isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
          }
        >
          <svg
            className="w-6 h-6"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        {result.toFixed(6)} {getUnitLabel(toUnit)}
      </div>

      {history.length > 0 && (
        <div className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-slide-up">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              تاریخچه تبدیل‌ها
            </h3>
            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-lg font-medium text-gray-800 dark:text-white">
                      {item.inputValue} {getUnitLabel(item.fromUnit)} →{" "}
                      {item.outputValue.toFixed(6)} {getUnitLabel(item.toUnit)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {formatDate(item.timestamp)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        isFavorite(item.id)
                          ? removeFromFavorites(item.id)
                          : addToFavorites(item.id)
                      }
                      className={`p-2 rounded-full transition-colors ${
                        isFavorite(item.id)
                          ? "text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300"
                          : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                      }`}
                      aria-label={
                        isFavorite(item.id)
                          ? "حذف از علاقه‌مندی‌ها"
                          : "افزودن به علاقه‌مندی‌ها"
                      }
                    >
                      <svg
                        className="w-5 h-5"
                        fill={isFavorite(item.id) ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => removeFromHistory(item.id)}
                      className="p-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 rounded-full transition-colors"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
