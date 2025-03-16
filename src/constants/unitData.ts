import { Unit, UnitType } from "../types/units";

export const UNITS: Record<UnitType, Unit[]> = {
  length: [
    { id: "meter", label: "متر", type: "length" },
    { id: "kilometer", label: "کیلومتر", type: "length" },
    { id: "mile", label: "مایل", type: "length" },
    { id: "inch", label: "اینچ", type: "length" },
    { id: "foot", label: "فوت", type: "length" },
  ],
  weight: [
    { id: "gram", label: "گرم", type: "weight" },
    { id: "kilogram", label: "کیلوگرم", type: "weight" },
    { id: "pound", label: "پوند", type: "weight" },
  ],
  temperature: [
    { id: "celsius", label: "سلسیوس", type: "temperature" },
    { id: "fahrenheit", label: "فارنهایت", type: "temperature" },
    { id: "kelvin", label: "کلوین", type: "temperature" },
  ],
};

// Conversion factors to base unit (meter, gram, celsius)
export const LENGTH_FACTORS: Record<string, number> = {
  meter: 1,
  kilometer: 1000,
  mile: 1609.34,
  inch: 0.0254,
  foot: 0.3048,
};

export const WEIGHT_FACTORS: Record<string, number> = {
  gram: 1,
  kilogram: 1000,
  pound: 453.592,
};
