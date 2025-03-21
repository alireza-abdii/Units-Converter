import React from "react";
import { useConverterStore } from "../../store/converterStore";
import { useLanguageStore } from "../../store/languageStore";
import { translations } from "../../translations";

export const ConversionResult = () => {
  const { result, fromUnit, toUnit, unitType } = useConverterStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  if (result === null) return null;

  return (
    <div className="mt-8">
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4">
          {t.result}
        </h2>
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {result} {t.units[unitType][toUnit]}
        </div>
      </div>
    </div>
  );
};
