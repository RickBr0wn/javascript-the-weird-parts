/**
 * A RomanNumerals `class` with 2 methods that can convert a Roman Numerals to and from an `integer` value.
 * 
 * #### toRoman:
 *  @param `number` - The `number` to be converted to Roman Numerals
 *  @returns `string` - The Roman Numeral as a `string`
 * 
 * #### fromRoman:
 *  @param `string` - The Roman Numeral to be converted to a `number`
 *  @returns `number` - The `number` of the supplied Roman Numeral
 * 
 */
class RomanNumeralsCreator {
  constructor() {
    this.decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    this.romanNumeralArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  }

  toRoman(num) {
    let answer = ''
    for (let i = 0; i < this.decimalArray.length; i++) {
      while ((num % this.decimalArray[i]) < num) {
        answer += this.romanNumeralArray[i]
        num -= this.decimalArray[i]
      }
    }
    return answer
  }

  fromRoman(romanNumeral) {
    let answer = 0
    let arr = romanNumeral.split('') //?
    this.romanNumeralArray.map((numeral, idx) => {
      
    })
    answer //?
  }
} 

const RomanNumerals = new RomanNumeralsCreator

RomanNumerals.toRoman(950) //?
RomanNumerals.fromRoman('CML'); //?
