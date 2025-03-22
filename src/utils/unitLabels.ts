import { translations } from "../translations";
import { UnitType } from "../types/units";

export const getUnitLabel = (
  unitId: string,
  unitType: UnitType,
  language: "fa" | "en" = "fa"
): string => {
  return translations[language].units[unitType][unitId] || unitId;
};
