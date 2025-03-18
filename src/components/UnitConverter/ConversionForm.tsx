import React from "react";
import { useConverterStore } from "../../store/converterStore";
import { UNITS } from "../../constants/unitData";
import { UnitType } from "../../types/units";

export const ConversionForm: React.FC = () => {
  const {
    unitType,
    inputValue,
    fromUnit,
    toUnit,
    setUnitType,
    setInputValue,
    setFromUnit,
    setToUnit,
    convert,
  } = useConverterStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    convert();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="unitType"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            نوع واحد
          </label>
          <select
            id="unitType"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value as UnitType)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-300 shadow-sm hover:shadow-md
                     appearance-none cursor-pointer"
          >
            <option value="length">طول</option>
            <option value="weight">وزن</option>
            <option value="temperature">دما</option>
            <option value="area">مساحت</option>
            <option value="volume">حجم</option>
            <option value="speed">سرعت</option>
            <option value="pressure">فشار</option>
            <option value="power">توان</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="inputValue"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            مقدار
          </label>
          <input
            type="text"
            id="inputValue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-300 shadow-sm hover:shadow-md
                     placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="مقدار را وارد کنید"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fromUnit"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            از واحد
          </label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-300 shadow-sm hover:shadow-md
                     appearance-none cursor-pointer"
          >
            <option value="">انتخاب کنید</option>
            {UNITS[unitType].map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="toUnit"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            به واحد
          </label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-300 shadow-sm hover:shadow-md
                     appearance-none cursor-pointer"
          >
            <option value="">انتخاب کنید</option>
            {UNITS[unitType].map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-sm 
                   hover:shadow-md active:scale-95 bg-gradient-to-r from-blue-600 to-indigo-600 
                   text-white hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 
                   disabled:cursor-not-allowed"
          disabled={!inputValue || !fromUnit || !toUnit}
        >
          تبدیل
        </button>
      </div>
    </form>
  );
};
