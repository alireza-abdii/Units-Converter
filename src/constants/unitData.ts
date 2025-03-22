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
    { id: "meterPerSecond", label: "متر بر ثانیه", type: "speed" },
    { id: "kilometerPerHour", label: "کیلومتر بر ساعت", type: "speed" },
    { id: "milePerHour", label: "مایل بر ساعت", type: "speed" },
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
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.34,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
  },
  weight: {
    kilogram: 1000,
    gram: 1,
    milligram: 0.001,
    pound: 453.592,
    ounce: 28.3495,
  },
  area: {
    squareMeter: 1,
    squareKilometer: 1000000,
    squareMile: 2589988.11,
    squareYard: 0.836127,
    squareFoot: 0.092903,
    squareInch: 0.00064516,
    hectare: 10000,
    acre: 4046.86,
  },
  volume: {
    liter: 1,
    milliliter: 0.001,
    cubicMeter: 1000,
    gallon: 3.78541,
    quart: 0.946353,
    pint: 0.473176,
    cup: 0.236588,
    tablespoon: 0.0147868,
    teaspoon: 0.00492892,
  },
  speed: {
    meterPerSecond: 1,
    kilometerPerHour: 0.277778,
    milePerHour: 0.44704,
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
