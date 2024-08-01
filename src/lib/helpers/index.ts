/**
 * Transforms string into object path URLs.
 * @example  Input: 'Product | product'
 *           Output: '/product'
 */
export const transformTitleSheetToPathURL = (str: string) => {
  const parts = str.split(' | ');
  return '/' + parts[1];
};

/**
 * Retrieves the title value from a string.
 * @param {string} str - The input string containing the title value.
 * @returns {string} The extracted title value.
 *
 * @example
 * const title = getTitleValueAppPage("Welcome | /welcome");
 * Output: "Welcome"
 */
export const getTitleValueAppPage = (str: string) => {
  const parts = str.split(' | ');
  return parts[0];
};

export const isSheetAppPage = (str: string) => {
  return str.includes(' | ');
};