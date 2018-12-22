/**
 * Find the unique number
 * * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 *
 * @param `array` - the array to find the unique number in
 * @returns `number` - the unique number in the array
 */

function findUniq(arr) {
  if (arr.filter(item => item === arr[0]).length === 1) {
    return Number(arr[0]);
  }
  return Number(arr.filter(item => item !== arr[0]));
}

findUniq([0, 1, 1]); //?

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55

// Test.assertEquals(findUniq([0, 1, 0]), 1);
// Test.assertEquals(findUniq([1, 1, 1, 2, 1, 1]), 2);
// Test.assertEquals(findUniq([3, 10, 3, 3, 3]), 10);
