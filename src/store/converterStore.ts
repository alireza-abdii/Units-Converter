import { create } from "zustand";

type UnitType = "length" | "weight" | "temperature";

interface ConverterStore {
  unitType: UnitType;
  inputValue: string;
  fromUnit: string;
  toUnit: string;
  setUnitType: (type: UnitType) => void;
  setInputValue: (value: string) => void;
  setFromUnit: (unit: string) => void;
  setToUnit: (unit: string) => void;
}

export const useConverterStore = create<ConverterStore>((set) => ({
  unitType: "length",
  inputValue: "",
  fromUnit: "",
  toUnit: "",
  setUnitType: (type) => set({ unitType: type }),
  setInputValue: (value) => set({ inputValue: value }),
  setFromUnit: (unit) => set({ fromUnit: unit }),
  setToUnit: (unit) => set({ toUnit: unit }),
}));
