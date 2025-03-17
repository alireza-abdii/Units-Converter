import { CONVERSION_FACTORS } from "../constants/unitData";
import { UnitType } from "../types/units";

export const convertLength = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * CONVERSION_FACTORS.length[fromUnit];
  return baseValue / CONVERSION_FACTORS.length[toUnit];
};

export const convertWeight = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * CONVERSION_FACTORS.weight[fromUnit];
  return baseValue / CONVERSION_FACTORS.weight[toUnit];
};

export const convertArea = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * CONVERSION_FACTORS.area[fromUnit];
  return baseValue / CONVERSION_FACTORS.area[toUnit];
};

export const convertVolume = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * CONVERSION_FACTORS.volume[fromUnit];
  return baseValue / CONVERSION_FACTORS.volume[toUnit];
};

export const convertSpeed = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * CONVERSION_FACTORS.speed[fromUnit];
  return baseValue / CONVERSION_FACTORS.speed[toUnit];
};

export const convertPressure = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * CONVERSION_FACTORS.pressure[fromUnit];
  return baseValue / CONVERSION_FACTORS.pressure[toUnit];
};

export const convertPower = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * CONVERSION_FACTORS.power[fromUnit];
  return baseValue / CONVERSION_FACTORS.power[toUnit];
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
  type: UnitType
): number => {
  switch (type) {
    case "length":
      return convertLength(value, fromUnit, toUnit);
    case "weight":
      return convertWeight(value, fromUnit, toUnit);
    case "temperature":
      return convertTemperature(value, fromUnit, toUnit);
    case "area":
      return convertArea(value, fromUnit, toUnit);
    case "volume":
      return convertVolume(value, fromUnit, toUnit);
    case "speed":
      return convertSpeed(value, fromUnit, toUnit);
    case "pressure":
      return convertPressure(value, fromUnit, toUnit);
    case "power":
      return convertPower(value, fromUnit, toUnit);
    default:
      return value;
  }
};
