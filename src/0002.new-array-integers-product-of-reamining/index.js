/**
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the
 * numbers in the original array except the one at i.
 *
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2,1]
 * the expected output would be [2, 3, 6].
 *
 * Follow-up: what if you can't use division?
 */

export default function integersProductOfRemainingIntegers(numbersArray) {
  const filterOutCurrentIndex = currentIndex => (item, index) => index !== currentIndex;
  const reduceNumbersByDivision = (prev, curr) => prev * curr;

  return numbersArray.map((integer, currentIndex, array) => {
    return array
      .filter(filterOutCurrentIndex(currentIndex))
      .reduce(reduceNumbersByDivision);
  });
}

export function integersProductOfRemainingIntegersVersion2(numbersArray) {
  let newTotalArray = [];
  for(let i = 0; i < numbersArray.length; i++) {
    let total;
    for (let j = 0; j < numbersArray.length; j++) {
      if(i !== j) {
        total = !total ? numbersArray[j] : total *= numbersArray[j];
      }
    }
    newTotalArray = [...newTotalArray, total];
  }

  return newTotalArray;
}
