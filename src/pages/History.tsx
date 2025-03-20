import React from "react";
import { ConversionHistory } from "../components/UnitConverter/ConversionHistory";

export const History: React.FC = () => {
  return (
    <main className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          تاریخچه تبدیل‌ها
        </h1>
        <ConversionHistory />
      </div>
    </main>
  );
};
