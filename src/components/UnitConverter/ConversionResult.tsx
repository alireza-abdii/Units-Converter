import { useConverterStore } from "../../store/converterStore";
import { UNITS } from "../../constants/unitData";

export const ConversionResult = () => {
  const { result, unitType, fromUnit, toUnit, history } = useConverterStore();

  const getUnitLabel = (unitId: string) => {
    return UNITS[unitType].find((u) => u.id === unitId)?.label || unitId;
  };

  return (
    <div className="mt-6">
      {result !== null && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            نتیجه تبدیل:
          </h3>
          <p className="text-green-700">
            {result.toFixed(2)} {getUnitLabel(toUnit)}
          </p>
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            تاریخچه تبدیل‌ها
          </h3>
          <div className="space-y-2">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 border border-gray-200 rounded-md p-3 text-sm"
              >
                <p className="text-gray-600">
                  {item.inputValue} {getUnitLabel(item.fromUnit)} ={" "}
                  {item.outputValue.toFixed(2)} {getUnitLabel(item.toUnit)}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {new Date(item.timestamp).toLocaleString("fa-IR")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
