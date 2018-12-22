/**
 * A function that takes two strings, and returns `true` if a portion of `str1` characters can be
 * rearranged to match `str2`, otherwise returns `false`
 * * Input strings `str1` and `str2` are `null` terminated.
 * * a 'null - terminated string' is a character string stored as an array containing the characters and terminated with a `null` character('\x00').
 * * *https://en.wikipedia.org/wiki/Null-terminated_string*
 *
 * @param `string` - A string in lower case to be searched through
 * @param `string` - A string that must be matched to
 * @returns `boolean` - `true` || `false`
 */
export function scramble(str1, str2) {
  const lettersObject = str1.split("").reduce((accumulator, currentLetter) => {
    (accumulator[currentLetter] += 1) || (accumulator[currentLetter] = 1);
    return accumulator;
  }, {}); //?

  return str2.split("").every(currentLetter => {
    if (lettersObject[currentLetter] > 0) {
      lettersObject[currentLetter]--;
      return true;
    } else {
      return false;
    }
  });
}

scramble("scriptjavx", "javascript"); //?

// describe('Example Tests', function () {
//   Test.assertEquals(scramble('rkqodlw', 'world'), true);
//   Test.assertEquals(scramble('cedewaraaossoqqyt', 'codewars'), true);
//   Test.assertEquals(scramble('katas', 'steak'), false);
//   Test.assertEquals(scramble('scriptjava', 'javascript'), true);
//   Test.assertEquals(scramble('scriptingjava', 'javascript'), true);
//   Test.assertEquals(scramble('scriptsjava', 'javascripts'), true);
//   Test.assertEquals(scramble('jscripts', 'javascript'), false);
//   Test.assertEquals(scramble('aabbcamaomsccdd', 'commas'), true);
// });
