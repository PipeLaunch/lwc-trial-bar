/**
 * @description Normalize Boolean
 * @param {*} value value
 * @returns {Boolean} value in boolean
 */
export function normalizeBoolean(value) {
  if (
    typeof value === "string" &&
    (value === "0" || value.toLowerCase() === "false")
  )
    return false;
  return Boolean(value);
}

/**
 * @description Validates string
 * @param {String} value
 * @returns {String|null}
 */
export function validateString(value = "") {
  if (typeof value !== "string") return null;
  const _value = value.trim();
  return _value.length === 0 ? null : _value;
}

/**
 * @description check if slot has content
 * @param {*} evt
 * @returns {Boolean} true if slot has content
 */
export function hasSlotContent(evt) {
  const slot = evt.target !== undefined ? evt.target : evt.currentTarget;
  const checkSlotContent =
    slot && (slot.innerText || slot.assignedElements().length > 0);
  return checkSlotContent;
}
