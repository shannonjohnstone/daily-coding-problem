/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 *
 * For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

/**
 * loop over array over numbers
 */
export default function checkTwoNumbersEqual(numbersArray, equalVal) {
  let doesSum = false;

  numbersArray.forEach((val, i, arr) => {
    return arr.reduce((prev, curr, currentIndex, arr) => {
      const calculatedValuesEqual = prev + curr === equalVal;
      doesSum = calculatedValuesEqual ? true : doesSum;
      return prev;
    }, arr[i]);
  });

  return doesSum;
}

