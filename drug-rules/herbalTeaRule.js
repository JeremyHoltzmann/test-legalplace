import { DrugRule } from "./drugRulesInterface";

export class HerbalTeaRule extends DrugRule {
  updateBenefitValue(drug) {
    let benefitIncrease = 1;

    if (drug.expiresIn < 0) benefitIncrease = 2;

    drug.benefit += Math.min(50, drug.benefit + benefitIncrease);
  }
}
