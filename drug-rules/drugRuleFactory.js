import {
  DefaultDrugRule,
  DafalganRule,
  FervexRule,
  HerbalTeaRule,
  MagicPillRule,
} from "./DrugRule";

export const ruleFactory = (drugName) => {
  switch (drugName) {
    case "Dafalgan":
      return new DafalganRule();
    case "Fervex":
      return new FervexRule();
    case "Herbal Tea":
      return new HerbalTeaRule();
    case "Magic Pill":
      return new MagicPillRule();
    default:
      return new DefaultDrugRule();
  }
};
