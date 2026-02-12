export class DrugRule {
  updateBenefitValue(drug) {
    throw new Error("Update Method must be implemented for : ", drug.name);
  }

  updateExpirationValue(drug) {
    drug.expiresIn = drug.expiresIn - 1;
  }
}
