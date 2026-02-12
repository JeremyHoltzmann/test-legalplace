import { DrugRule } from "./drugRulesInterface";
import { MIN_BENEFIT } from "../constants";
export class DefaultDrugRule extends DrugRule {
  updateBenefitValue(drug) {
    let benefitDecrease = 1;

    if (drug.expiresIn < 0) benefitDecrease = 2;

    drug.benefit = Math.max(MIN_BENEFIT, drug.benefit - benefitDecrease);
  }
}
