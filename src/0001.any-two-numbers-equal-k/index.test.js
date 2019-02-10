import checkTwoNumbersEqual from './index';

test('checkTwoNumbersEqual', () => {
  expect(checkTwoNumbersEqual([1, 10, 3, 7], 17)).toBeTruthy();
  expect(checkTwoNumbersEqual([1, 10, 3, 7], 9)).toBeFalsy();
});
