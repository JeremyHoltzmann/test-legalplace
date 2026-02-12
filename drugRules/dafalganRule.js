import { DrugRule } from "./drugRulesInterface";

export class DafalganRule extends DrugRule {
  updateBenefitValue(drug) {
    drug.benefit = Math.max(0, drug.benefit - 2);
  }
}
