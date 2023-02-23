import { computeShowBar } from "./../lwcTrialBarLicenseInfoUtils";

describe("computeShowBar", () => {
  test("Site license", () => {
    const payload = {
      RemainingDays: 0,
      Status: "Active"
    };
    expect(computeShowBar(payload)).toBeFalsy();
  });

  test("Trial", () => {
    const payload = {
      ExpirationDate: "2022-08-30T00:00:00.000Z",
      RemainingDays: 4,
      Status: "Active"
    };
    expect(computeShowBar(payload)).toBeTruthy();
  });
});
