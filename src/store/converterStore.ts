import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UnitType, ConversionHistory } from "../types/units";
import { convert } from "../utils/conversions";
import { CONVERSION_FACTORS } from "../constants/unitData";

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

      setUnitType: (type) => {
        const units = Object.keys(CONVERSION_FACTORS[type]);
        set({
          unitType: type,
          fromUnit: units[0],
          toUnit: units[1],
          result: null,
        });
      },

      setInputValue: (value) => set({ inputValue: value }),
      setFromUnit: (unit) => set({ fromUnit: unit }),
      setToUnit: (unit) => set({ toUnit: unit }),

      convert: () => {
        const { unitType, inputValue, fromUnit, toUnit, history } = get();
        if (!inputValue || !fromUnit || !toUnit) {
          console.log("Missing required values:", {
            inputValue,
            fromUnit,
            toUnit,
          });
          return;
        }

        const numericValue = parseFloat(inputValue.replace(/,/g, ""));
        if (isNaN(numericValue)) {
          console.log("Invalid input value:", inputValue);
          return;
        }

        const result = convert(numericValue, fromUnit, toUnit, unitType);
        if (isNaN(result)) {
          console.log("Conversion failed:", {
            numericValue,
            fromUnit,
            toUnit,
            unitType,
          });
          return;
        }

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
