import { MIN_BENEFIT } from "../constants";

export class DrugRule {
  updateBenefitValue(drug) {
    drug.benefit = Math.max(MIN_BENEFIT, drug.benefit - 1);
  }

  updateExpirationValue(drug) {
    drug.expiresIn = drug.expiresIn - 1;
  }
}
