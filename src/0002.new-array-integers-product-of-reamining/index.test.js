import integersProductOfRemainingIntegers, { integersProductOfRemainingIntegersVersion2 } from './index';

describe('integersProductOfRemainingIntegers', () => {
  test('[1, 2, 3, 4, 5] -> [120, 60, 40, 30, 24]', () => {
    expect(integersProductOfRemainingIntegers([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });
  test('[3, 2, 1] -> [120, 60, 40, 30, 24]', () => {
    expect(integersProductOfRemainingIntegers([3, 2, 1])).toEqual([2, 3, 6]);
  });
});

describe('integersProductOfRemainingIntegersVersion2', () => {
  test('[1, 2, 3, 4, 5] -> [120, 60, 40, 30, 24]', () => {
    expect(integersProductOfRemainingIntegersVersion2([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });
  test('[3, 2, 1] -> [120, 60, 40, 30, 24]', () => {
    expect(integersProductOfRemainingIntegersVersion2([3, 2, 1])).toEqual([2, 3, 6]);
  });
});

