import { create } from "zustand";
import { UnitType, ConversionHistory } from "../types/units";
import { convert } from "../utils/conversions";

interface ConverterStore {
  unitType: UnitType;
  inputValue: string;
  fromUnit: string;
  toUnit: string;
  result: number | null;
  history: ConversionHistory[];
  setUnitType: (type: UnitType) => void;
  setInputValue: (value: string) => void;
  setFromUnit: (unit: string) => void;
  setToUnit: (unit: string) => void;
  convert: () => void;
}

export const useConverterStore = create<ConverterStore>((set, get) => ({
  unitType: "length",
  inputValue: "",
  fromUnit: "",
  toUnit: "",
  result: null,
  history: [],
  setUnitType: (type) =>
    set({
      unitType: type,
      fromUnit: "",
      toUnit: "",
      result: null,
    }),
  setInputValue: (value) => set({ inputValue: value }),
  setFromUnit: (unit) => set({ fromUnit: unit }),
  setToUnit: (unit) => set({ toUnit: unit }),
  convert: () => {
    const { unitType, inputValue, fromUnit, toUnit, history } = get();
    if (!inputValue || !fromUnit || !toUnit) return;

    const numericValue = parseFloat(inputValue);
    if (isNaN(numericValue)) return;

    const result = convert(numericValue, fromUnit, toUnit, unitType);

    const newHistory: ConversionHistory = {
      id: Date.now().toString(),
      fromUnit,
      toUnit,
      inputValue: numericValue,
      outputValue: result,
      type: unitType,
      timestamp: Date.now(),
    };

    set({
      result,
      history: [newHistory, ...history].slice(0, 10), // Keep only last 10 conversions
    });
  },
}));
