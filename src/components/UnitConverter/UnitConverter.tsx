import React from "react";
import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";
import { ConversionHistory } from "./ConversionHistory";
import { useConverterStore } from "../../store/converterStore";

export const UnitConverter: React.FC = () => {
  const { result, history } = useConverterStore();

  return (
    <div className="py-8 sm:py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          تبدیل واحدها
        </h1>

        <ConversionForm />

        {result && <ConversionResult />}

        {history.length > 0 && <ConversionHistory />}
      </div>
    </div>
  );
};
