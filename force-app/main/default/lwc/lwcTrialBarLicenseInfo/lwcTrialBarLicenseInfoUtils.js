/**
 * @description computes if it's needed to display the trial bar
 * @param {Object} data
 * @returns {Boolean} true to show
 */
export function computeShowBar(data, minimumDaysTrial, minimumDaysLicensed) {
  if (
    !Object.prototype.hasOwnProperty.call(data, "RemainingDays") ||
    isNaN(data.RemainingDays)
  )
    return false;

  if (data.Status === "Trial" && data.RemainingDays <= minimumDaysTrial)
    return true;

  if (
    (data.Status === "Active" || data.Status === "Expired") &&
    data.RemainingDays <= minimumDaysLicensed
  )
    return true;

  return false;
}

// TODO:
export function validateNumber(input) {
  if (isNaN(input) || input < 0) return 0;
  return Number(input);
}