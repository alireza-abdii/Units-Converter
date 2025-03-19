import React from "react";
import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";
import { ConversionHistory } from "./ConversionHistory";

export const UnitConverter: React.FC = () => {
  return (
    <div className="card">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        تبدیل واحدها
      </h1>
      <ConversionForm />
      <ConversionResult />
      <ConversionHistory />
    </div>
  );
};
