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
  favorites: string[];
  setUnitType: (type: UnitType) => void;
  setInputValue: (value: string) => void;
  setFromUnit: (unit: string) => void;
  setToUnit: (unit: string) => void;
  convert: () => void;
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  removeFromHistory: (id: string) => void;
  initialize: () => void;
}

export const useConverterStore = create<ConverterStore>((set, get) => ({
  unitType: "length",
  inputValue: "",
  fromUnit: "",
  toUnit: "",
  result: null,
  history: [],
  favorites: [],
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

    // Save to localStorage
    const savedHistory = JSON.parse(
      localStorage.getItem("conversionHistory") || "[]"
    );
    localStorage.setItem(
      "conversionHistory",
      JSON.stringify([newHistory, ...savedHistory].slice(0, 50))
    );
  },
  addToFavorites: (id) => {
    const { favorites } = get();
    if (!favorites.includes(id)) {
      set({ favorites: [...favorites, id] });
      localStorage.setItem(
        "favoriteConversions",
        JSON.stringify([...favorites, id])
      );
    }
  },
  removeFromFavorites: (id) => {
    const { favorites } = get();
    const newFavorites = favorites.filter((favId) => favId !== id);
    set({ favorites: newFavorites });
    localStorage.setItem("favoriteConversions", JSON.stringify(newFavorites));
  },
  removeFromHistory: (id) => {
    const { history } = get();
    const newHistory = history.filter((item) => item.id !== id);
    set({ history: newHistory });

    // Update localStorage
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
  // Initialize from localStorage
  initialize: () => {
    const savedHistory = JSON.parse(
      localStorage.getItem("conversionHistory") || "[]"
    );
    const savedFavorites = JSON.parse(
      localStorage.getItem("favoriteConversions") || "[]"
    );
    set({
      history: savedHistory.slice(0, 10),
      favorites: savedFavorites,
    });
  },
}));
