import { useConverterStore } from "../../store/converterStore";

export const ConversionResult = () => {
  const { inputValue, fromUnit, toUnit } = useConverterStore();

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">نتیجه تبدیل:</h2>
      <p className="text-xl">
        {inputValue} {fromUnit} = {inputValue} {toUnit}
      </p>
    </div>
  );
};
