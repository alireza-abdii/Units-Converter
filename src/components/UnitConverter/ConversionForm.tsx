import React from "react";
import { useConverterStore } from "../../store/converterStore";
import { useLanguageStore } from "../../store/languageStore";
import { translations } from "../../translations";

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

  const { language } = useLanguageStore();
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    convert();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="label">{t.unitTypes[unitType]}</label>
        <select
          value={unitType}
          onChange={(e) => setUnitType(e.target.value as any)}
          className="select"
        >
          {Object.entries(t.unitTypes).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="label">{t.from}</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="select"
        >
          {Object.entries(t.units[unitType]).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="label">{t.to}</label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          {Object.entries(t.units[unitType]).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="label">{t.enterValue}</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder={t.enterValue}
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        {t.convert}
      </button>
    </form>
  );
};
