import { DrugRule } from "./drugRulesInterface";

export class DefaultDrugRule extends DrugRule {
  updateBenefitValue(drug) {
    let benefitDecrease = 1;

    if (drug.expiresIn < 0) benefitDecrease = 2;

    drug.benefit = Math.max(0, drug.benefit - benefitDecrease);
  }
}
