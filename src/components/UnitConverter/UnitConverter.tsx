import React, { useEffect } from "react";
import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";
import { useConverterStore } from "../../store/converterStore";

export const UnitConverter: React.FC = () => {
  const initialize = useConverterStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          تبدیل واحدها
        </h1>
        <ConversionForm />
        <ConversionResult />
      </div>
    </div>
  );
};
