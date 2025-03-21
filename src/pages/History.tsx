import React from "react";
import { ConversionHistory } from "../components/UnitConverter/ConversionHistory";
import { useLanguageStore } from "../store/languageStore";
import { translations } from "../translations";

export const History: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <main className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t.history}
        </h1>
        <ConversionHistory />
      </div>
    </main>
  );
};
