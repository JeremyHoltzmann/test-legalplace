import { MIN_BENEFIT } from "../constants";

export class DrugRule {
  updateBenefitValue(drug) {
    let benefitDecrease = 1;

    if (drug.expiresIn < 0) benefitDecrease = 2;

    drug.benefit = Math.max(MIN_BENEFIT, drug.benefit - benefitDecrease);
  }

  updateExpirationValue(drug) {
    drug.expiresIn = drug.expiresIn - 1;
  }
}
