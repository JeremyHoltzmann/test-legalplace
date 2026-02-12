import { drugRulesFactory } from "./drugRulesFactory";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drugRule = drugRulesFactory(this.drugs[i].name);

      drugRule.updateBenefitValue(this.drugs[i]);
      drugRule.updateExpirationValue(this.drugs[i]);
    }

    return this.drugs;
  }
}
