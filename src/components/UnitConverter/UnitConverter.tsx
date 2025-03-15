import { ConversionForm } from "./ConversionForm";
import { ConversionResult } from "./ConversionResult";

export const UnitConverter = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <ConversionForm />
      <ConversionResult />
    </div>
  );
};
