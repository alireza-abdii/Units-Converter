import React from "react";
import { ConversionHistory } from "../components/UnitConverter/ConversionHistory";

export const History: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        تاریخچه تبدیل‌ها
      </h1>
      <ConversionHistory />
    </div>
  );
};
