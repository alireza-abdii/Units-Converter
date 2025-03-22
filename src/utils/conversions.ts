import { CONVERSION_FACTORS } from "../constants/unitData";
import { UnitType } from "../types/units";

const getConversionFactor = (type: UnitType, unit: string): number => {
  return CONVERSION_FACTORS[type][unit] || 1;
};

export const convertLength = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * getConversionFactor("length", fromUnit);
  return baseValue / getConversionFactor("length", toUnit);
};

export const convertWeight = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * getConversionFactor("weight", fromUnit);
  return baseValue / getConversionFactor("weight", toUnit);
};

export const convertArea = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * getConversionFactor("area", fromUnit);
  return baseValue / getConversionFactor("area", toUnit);
};

export const convertVolume = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * getConversionFactor("volume", fromUnit);
  return baseValue / getConversionFactor("volume", toUnit);
};

export const convertSpeed = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * getConversionFactor("speed", fromUnit);
  return baseValue / getConversionFactor("speed", toUnit);
};

export const convertPressure = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * getConversionFactor("pressure", fromUnit);
  return baseValue / getConversionFactor("pressure", toUnit);
};

export const convertPower = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const baseValue = value * getConversionFactor("power", fromUnit);
  return baseValue / getConversionFactor("power", toUnit);
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
  if (type === "temperature") {
    return convertTemperature(value, fromUnit, toUnit);
  }

  const baseValue = value * getConversionFactor(type, fromUnit);
  return baseValue / getConversionFactor(type, toUnit);
};
