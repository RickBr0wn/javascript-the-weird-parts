/**
* A function that takes a string, and returns a valid hashtag
* * Starts with a hashtag(#)
* * All words must have their first letter capitalized
* * If the final result is longer than 140 chars it must
return `false`
* * If the input or the result is an empty string it must
return `false`
*
* @param `string` - to be formatted
* @returns `string` - In the format as detailed above
*/
function generateHashtag(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" +
        str
          .split(" ")
          .map(capitalize)
          .join("");
}

/**
 * A function that takes a string, and Capitalizes the first letter
 *
 * @param `string` - The string to be formatted
 * @returns `string` - The string returned with first letter capitalized
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
