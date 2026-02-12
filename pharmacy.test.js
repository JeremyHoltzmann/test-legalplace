import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("test", -2, 1)]);
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

describe("Pharmacy", () => {
  it("should keep the benefit and the expireIn at 3", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 3, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Magic Pill", 3, 3)]);
  });
});

describe("Pharmacy", () => {
  it("should increase the benefit by 1 and decrease the expireIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 19, 4)]);
  });
});

describe("Pharmacy", () => {
  it("should increase the benefit by 2 and decrease the expireIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 9, 5)]);
  });
});

describe("Pharmacy", () => {
  it("should increase the benefit by 3 and decrease the expireIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 6)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 4, 9)]);
  });
});

describe("Pharmacy", () => {
  it("should set the benefit at 0 and decrease benefit by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 6)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});
