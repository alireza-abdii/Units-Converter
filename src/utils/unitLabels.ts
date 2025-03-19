import { UNITS } from "../constants/unitData";
import { UnitType } from "../types/units";

export const getUnitLabel = (unitId: string, unitType: UnitType): string => {
  return UNITS[unitType].find((u) => u.id === unitId)?.label || unitId;
};
