import { useConverterStore } from "../../store/converterStore";

export const ConversionForm = () => {
  const { setUnitType, setInputValue, setFromUnit, setToUnit } =
    useConverterStore();

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          نوع واحد
        </label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          onChange={(e) => setUnitType(e.target.value as any)}
        >
          <option value="length">طول</option>
          <option value="weight">وزن</option>
          <option value="temperature">دما</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">مقدار</label>
        <input
          type="number"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            از واحد
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="">انتخاب کنید</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            به واحد
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            onChange={(e) => setToUnit(e.target.value)}
          >
            <option value="">انتخاب کنید</option>
          </select>
        </div>
      </div>
    </div>
  );
};
