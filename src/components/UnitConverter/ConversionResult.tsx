import { useConverterStore } from "../../store/converterStore";
import { UNITS } from "../../constants/unitData";
import { useEffect, useState } from "react";

export const ConversionResult = () => {
  const { result, unitType, fromUnit, toUnit, history } = useConverterStore();
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (result !== null) {
      setShowResult(false);
      setTimeout(() => setShowResult(true), 100);
    }
  }, [result]);

  const getUnitLabel = (unitId: string) => {
    return UNITS[unitType].find((u) => u.id === unitId)?.label || unitId;
  };

  return (
    <div className="mt-8 space-y-6">
      {result !== null && (
        <div
          className={`bg-green-50 border border-green-200 rounded-lg p-6 transition-all duration-500 transform
                    ${
                      showResult
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
          role="alert"
          aria-live="polite"
        >
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            نتیجه تبدیل
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-green-700 text-2xl font-bold">
              {result.toFixed(2)} {getUnitLabel(toUnit)}
            </p>
            <div className="text-green-600 text-sm">
              {getUnitLabel(fromUnit)} ➜ {getUnitLabel(toUnit)}
            </div>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            تاریخچه تبدیل‌ها
          </h3>
          <div className="space-y-3">
            {history.map((item, index) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:bg-gray-100
                         transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">
                    <span className="font-medium">{item.inputValue}</span>{" "}
                    {getUnitLabel(item.fromUnit)} ={" "}
                    <span className="font-medium">
                      {item.outputValue.toFixed(2)}
                    </span>{" "}
                    {getUnitLabel(item.toUnit)}
                  </p>
                  <time
                    className="text-gray-400 text-sm"
                    dateTime={new Date(item.timestamp).toISOString()}
                  >
                    {new Date(item.timestamp).toLocaleString("fa-IR")}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
