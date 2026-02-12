import { DrugRule } from "./drugRulesInterface";
import { MIN_BENEFIT } from "../constants";
export class DafalganRule extends DrugRule {
  updateBenefitValue(drug) {
    drug.benefit = Math.max(MIN_BENEFIT, drug.benefit - 2);
  }
}
