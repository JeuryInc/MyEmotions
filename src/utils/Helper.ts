
/**
 * Validate an Array and check if has data
 *
 * @param {Array<any>} data
 * @returns {bool}
 */
export const isValidArray = (data: Array<any>) => {
    return !!data && Array.isArray(data) && data.length > 0;
};

/**
 * Split a string into a array
 *
 * @param {string} data
 * @returns {Array}
 */
export const splitStringToArray = (data: string) => {
    return data ? data.split(" ") : [];
};

