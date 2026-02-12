import { DrugRule } from "./drugRulesInterface";
import { MAX_BENEFIT } from "../constants";

export class FervexRule extends DrugRule {
  updateBenefitValue(drug) {
    let benefitIncrease = 1;

    if (drug.expiresIn <= 0) {
      drug.benefit = 0;
      return;
    }

    if (drug.expiresIn <= 10) benefitIncrease = benefitIncrease + 1;
    if (drug.expiresIn <= 5) benefitIncrease = benefitIncrease + 1;

    drug.benefit = Math.min(MAX_BENEFIT, drug.benefit + benefitIncrease);
  }
}
