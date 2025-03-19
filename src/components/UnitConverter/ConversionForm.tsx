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
          <label htmlFor="unitType" className="label">
            نوع واحد
          </label>
          <select
            id="unitType"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value as UnitType)}
            className="select"
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
          <label htmlFor="inputValue" className="label">
            مقدار
          </label>
          <input
            type="text"
            id="inputValue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input"
            placeholder="مقدار را وارد کنید"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fromUnit" className="label">
            از واحد
          </label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="select"
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
          <label htmlFor="toUnit" className="label">
            به واحد
          </label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="select"
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
          className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!inputValue || !fromUnit || !toUnit}
        >
          تبدیل
        </button>
      </div>
    </form>
  );
};
