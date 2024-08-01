
/**
 * Transforms an array of strings into an array of path URLs.
 * Each string in the input array should be in the format "text | path".
 * The function extracts the path from each string and returns an array of URLs.
 *
 * @param arr - The array of strings to transform.
 * @returns An array of path URLs.
 * 
 * @example  Input: [ 'Product | product', 'Home Page | home-page' ]
 *           Output: [ { key: '/product', value: 'Product' }, { key: '/home-page', value: 'Home Page' } ]
 */
export const transformArrayToPathURL = (arr: string[]) => {
  return arr.map(item => {
    const parts = item.split(' | ');
    return {
      key: `/${parts[1]}`,
      value: parts[0]
    };
  });
};
