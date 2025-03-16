import { useConverterStore } from "../../store/converterStore";
import { UNITS } from "../../constants/unitData";
import { UnitType } from "../../types/units";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    convert();
  };

  const unitTypes: { id: UnitType; label: string }[] = [
    { id: "length", label: "طول" },
    { id: "weight", label: "وزن" },
    { id: "temperature", label: "دما" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          نوع تبدیل
        </label>
        <select
          value={unitType}
          onChange={(e) => setUnitType(e.target.value as UnitType)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {unitTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">مقدار</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="مقدار را وارد کنید"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            از واحد
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
          <label className="block text-sm font-medium text-gray-700">
            به واحد
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        تبدیل
      </button>
    </form>
  );
};
