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
  area: [
    { id: "squareMeter", label: "متر مربع", type: "area" },
    { id: "squareFoot", label: "فوت مربع", type: "area" },
    { id: "hectare", label: "هکتار", type: "area" },
  ],
  volume: [
    { id: "liter", label: "لیتر", type: "volume" },
    { id: "cubicMeter", label: "متر مکعب", type: "volume" },
    { id: "gallon", label: "گالن", type: "volume" },
  ],
  speed: [
    { id: "kmh", label: "کیلومتر بر ساعت", type: "speed" },
    { id: "mph", label: "مایل بر ساعت", type: "speed" },
    { id: "ms", label: "متر بر ثانیه", type: "speed" },
  ],
  pressure: [
    { id: "pascal", label: "پاسکال", type: "pressure" },
    { id: "bar", label: "بار", type: "pressure" },
    { id: "mmHg", label: "میلی‌متر جیوه", type: "pressure" },
  ],
  power: [
    { id: "watt", label: "وات", type: "power" },
    { id: "kilowatt", label: "کیلووات", type: "power" },
    { id: "horsepower", label: "اسب بخار", type: "power" },
  ],
};

// Conversion factors to base unit
export const CONVERSION_FACTORS: Record<UnitType, Record<string, number>> = {
  length: {
    meter: 1,
    kilometer: 1000,
    mile: 1609.34,
    inch: 0.0254,
    foot: 0.3048,
  },
  weight: {
    gram: 1,
    kilogram: 1000,
    pound: 453.592,
  },
  area: {
    squareMeter: 1,
    squareFoot: 0.092903,
    hectare: 10000,
  },
  volume: {
    liter: 1,
    cubicMeter: 1000,
    gallon: 3.78541,
  },
  speed: {
    ms: 1,
    kmh: 0.277778,
    mph: 0.44704,
  },
  pressure: {
    pascal: 1,
    bar: 100000,
    mmHg: 133.322,
  },
  power: {
    watt: 1,
    kilowatt: 1000,
    horsepower: 745.7,
  },
  temperature: {
    celsius: 1,
    fahrenheit: 1,
    kelvin: 1,
  },
};
