/**
 * Get Empty String From Null Value.
 *
 * @param {any} value
 * @returns params value or empty string.
 */
export const getEmptyStringFromNull = (value : any) =>
  value !== null && value !== undefined ? value : "";

/**
 * Get Zero Number From Null Value.
 *
 * @param {any} value
 * @returns params value or zero number.
 */
export const getZeroNumberFromNull = (value : any) =>
  value !== null && value !== undefined ? value : 0;
  