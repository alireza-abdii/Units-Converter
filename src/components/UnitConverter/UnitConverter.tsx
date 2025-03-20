import { useEffect } from "react";
import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";
import { useConverterStore } from "../../store/converterStore";

export const UnitConverter = () => {
  const initialize = useConverterStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <main className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          تبدیل واحدها
        </h1>
        <ConversionForm />
        <ConversionResult />
      </div>
    </main>
  );
};
