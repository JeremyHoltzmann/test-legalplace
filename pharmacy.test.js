import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease the expiresIn and benefit should stay at 0", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)],
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease the expiresIn and benefit should be superior by 2", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 0)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", -2, 2)]);
  });
});

describe("Pharmacy", () => {
  it("should decrease the expiresIn and benefit should stay at 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", -2, 50)]);
  });
});
