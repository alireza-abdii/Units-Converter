import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";

export const UnitConverter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            تبدیل واحدها
          </h1>
          <ConversionForm />
          <ConversionResult />
        </div>
      </div>
    </div>
  );
};
