// @ts-check

/**
 * @description computes if it's needed to display the trial bar
 * @param {Object} data
 * @returns {Boolean} true to show
 */
 export function computeShowBar(data, minimumDaysTrial, minimumDaysLicensed) {
  if (
    data.RemainingDays === 0 &&
    data.Status === "Active" &&
    !Object.prototype.hasOwnProperty.call(data, "ExpirationDate")
  ) {
    return false; // for site license
  }

  if (
    !Object.prototype.hasOwnProperty.call(data, "RemainingDays") ||
    isNaN(data.RemainingDays)
  ) {
    return false;
  }

  if (data.Status === "Trial" && data.RemainingDays <= minimumDaysTrial) {
    return true;
  }

  if (
    (data.Status === "Active" || data.Status === "Expired") &&
    data.RemainingDays <= minimumDaysLicensed
  ) {
    return true;
  }

  return false;
}

/**
 * @description
 * @param {Object} input
 * @returns {Boolean}
 */
export function validatePackageLicenseInfo(input) {
  return (
    input &&
    Object.prototype.hasOwnProperty.call(input, "Status") &&
    Object.prototype.hasOwnProperty.call(input, "RemainingDays")
  );
}

/**
 * @description validates positive number
 * @param {*} input
 * @returns {Number}
 */
export function validateNumber(input) {
  if (isNaN(input) || input < 0) return 0;
  return Number(input);
}
