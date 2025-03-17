import { useConverterStore } from "../../store/converterStore";
import { UNITS } from "../../constants/unitData";
import { UnitType } from "../../types/units";
import { useState } from "react";

export const ConversionForm = () => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    convert();
    setTimeout(() => setIsSubmitting(false), 500);
  };

  const unitTypes: { id: UnitType; label: string; icon: string }[] = [
    { id: "length", label: "طول", icon: "📏" },
    { id: "weight", label: "وزن", icon: "⚖️" },
    { id: "temperature", label: "دما", icon: "🌡️" },
    { id: "area", label: "مساحت", icon: "📐" },
    { id: "volume", label: "حجم", icon: "📦" },
    { id: "speed", label: "سرعت", icon: "🚀" },
    { id: "pressure", label: "فشار", icon: "💨" },
    { id: "power", label: "قدرت", icon: "⚡" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="group">
          <label
            htmlFor="unitType"
            className="block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
          >
            نوع تبدیل
          </label>
          <select
            id="unitType"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value as UnitType)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition-all duration-200
                     focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400
                     group-hover:border-blue-400"
            aria-label="انتخاب نوع واحد"
          >
            {unitTypes.map((type) => (
              <option
                key={type.id}
                value={type.id}
                className="flex items-center"
              >
                {type.icon} {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="group">
          <label
            htmlFor="value"
            className="block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
          >
            مقدار
          </label>
          <input
            id="value"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition-all duration-200
                     focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400
                     group-hover:border-blue-400"
            placeholder="مقدار را وارد کنید"
            aria-label="مقدار برای تبدیل"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group">
            <label
              htmlFor="fromUnit"
              className="block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
            >
              از واحد
            </label>
            <select
              id="fromUnit"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition-all duration-200
                       focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400
                       group-hover:border-blue-400"
              aria-label="انتخاب واحد مبدأ"
              required
            >
              <option value="">انتخاب کنید</option>
              {UNITS[unitType].map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>

          <div className="group">
            <label
              htmlFor="toUnit"
              className="block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
            >
              به واحد
            </label>
            <select
              id="toUnit"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm transition-all duration-200
                       focus:border-blue-500 focus:ring-blue-500 hover:border-blue-400
                       group-hover:border-blue-400"
              aria-label="انتخاب واحد مقصد"
              required
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
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !inputValue || !fromUnit || !toUnit}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg transition-all duration-300
                 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed
                 transform hover:scale-[1.02] active:scale-[0.98]"
        aria-label="تبدیل واحدها"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            در حال تبدیل...
          </span>
        ) : (
          "تبدیل"
        )}
      </button>
    </form>
  );
};
