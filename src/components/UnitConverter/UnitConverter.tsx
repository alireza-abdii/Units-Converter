import { useEffect } from "react";
import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";
import { useConverterStore } from "../../store/converterStore";
import { useLanguageStore } from "../../store/languageStore";
import { translations } from "../../translations";

export const UnitConverter = () => {
  const initialize = useConverterStore((state) => state.initialize);
  const { language } = useLanguageStore();
  const t = translations[language];

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <main className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t.title}
        </h1>
        <ConversionForm />
        <ConversionResult />
      </div>
    </main>
  );
};
