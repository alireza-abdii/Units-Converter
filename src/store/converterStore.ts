import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UnitType, ConversionHistory } from "../types/units";
import { convertUnits } from "../utils/unitConverter";

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
  removeFromHistory: (id: string) => void;
  initialize: () => void;
  clearHistory: () => void;
}

export const useConverterStore = create<ConverterStore>()(
  persist(
    (set, get) => ({
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

        const numericValue = parseFloat(inputValue.replace(/,/g, ""));
        if (isNaN(numericValue)) return;

        const result = convertUnits(numericValue, fromUnit, toUnit, unitType);

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
          inputValue: "",
          history: [newHistory, ...history].slice(0, 10),
        });

        const savedHistory = JSON.parse(
          localStorage.getItem("conversionHistory") || "[]"
        );
        localStorage.setItem(
          "conversionHistory",
          JSON.stringify([newHistory, ...savedHistory].slice(0, 50))
        );
      },

      removeFromHistory: (id) => {
        const { history } = get();
        const newHistory = history.filter((item) => item.id !== id);
        set({ history: newHistory });

        const savedHistory = JSON.parse(
          localStorage.getItem("conversionHistory") || "[]"
        );
        localStorage.setItem(
          "conversionHistory",
          JSON.stringify(
            savedHistory.filter((item: ConversionHistory) => item.id !== id)
          )
        );
      },

      initialize: () => {
        const savedHistory = JSON.parse(
          localStorage.getItem("conversionHistory") || "[]"
        );
        set({
          history: savedHistory.slice(0, 10),
          unitType: "length",
          inputValue: "",
          fromUnit: "",
          toUnit: "",
          result: null,
        });
      },

      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "converter-storage",
    }
  )
);
