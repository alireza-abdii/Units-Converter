import React from "react";
import { useConverterStore } from "../../store/converterStore";
import { getUnitLabel } from "../../utils/unitLabels";

export const ConversionResult: React.FC = () => {
  const { result, toUnit, unitType } = useConverterStore();

  if (!result) return null;

  return (
    <div className="mt-8 card">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        نتیجه تبدیل
      </h2>
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        {result.toFixed(6)} {getUnitLabel(toUnit, unitType)}
      </div>
    </div>
  );
};
