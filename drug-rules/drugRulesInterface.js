export class DrugRule {
  updateBenefitValue(drug) {
    drug.benefit = Math.max(0, drug.benefit - 1);
  }

  updateExpirationValue(drug) {
    drug.expiresIn = drug.expiresIn - 1;
  }
}
