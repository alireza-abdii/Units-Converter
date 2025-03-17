export type UnitType =
  | "length"
  | "weight"
  | "temperature"
  | "area"
  | "volume"
  | "speed"
  | "pressure"
  | "power";

export type Unit = {
  id: string;
  label: string;
  type: UnitType;
};

export type ConversionHistory = {
  id: string;
  fromUnit: string;
  toUnit: string;
  inputValue: number;
  outputValue: number;
  type: UnitType;
  timestamp: number;
};
