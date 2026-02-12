import { DrugRule } from "./drugRulesInterface";
import { MAX_BENEFIT } from "../constants";

export class HerbalTeaRule extends DrugRule {
  updateBenefitValue(drug) {
    let benefitIncrease = 1;

    if (drug.expiresIn < 0) benefitIncrease = 2;

    drug.benefit = Math.min(MAX_BENEFIT, drug.benefit + benefitIncrease);
  }
}
