import { LENGTH_FACTORS, WEIGHT_FACTORS } from "../constants/unitData";

export const convertLength = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * LENGTH_FACTORS[fromUnit];
  return baseValue / LENGTH_FACTORS[toUnit];
};

export const convertWeight = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * WEIGHT_FACTORS[fromUnit];
  return baseValue / WEIGHT_FACTORS[toUnit];
};

export const convertTemperature = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  // Convert to Celsius first
  let celsius: number;
  switch (fromUnit) {
    case "fahrenheit":
      celsius = (value - 32) * (5 / 9);
      break;
    case "kelvin":
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  // Convert from Celsius to target unit
  switch (toUnit) {
    case "fahrenheit":
      return (celsius * 9) / 5 + 32;
    case "kelvin":
      return celsius + 273.15;
    default:
      return celsius;
  }
};

export const convert = (
  value: number,
  fromUnit: string,
  toUnit: string,
  type: string
): number => {
  switch (type) {
    case "length":
      return convertLength(value, fromUnit, toUnit);
    case "weight":
      return convertWeight(value, fromUnit, toUnit);
    case "temperature":
      return convertTemperature(value, fromUnit, toUnit);
    default:
      return value;
  }
};
