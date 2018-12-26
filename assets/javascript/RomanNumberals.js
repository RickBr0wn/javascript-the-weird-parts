/**
 * A RomanNumerals `class` that can convert a roman numerals to and from an `integer` value.
 */
class RomanNumeralsCreator {
  constructor(num) {
    this.num = num
    this.decimalArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    this.romanNumeralArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    this.answer = ''
  }

  toRoman() {
    for (let i = 0; i < this.decimalArray.length; i++) {
      while (this.num % this.decimalArray[i] < this.num) {
        this.answer += this.romanNumeralArray[i]
        this.num -= this.decimalArray[i]
      }
    }
    return this.answer
  }

  fromRoman() {

  }
}

const RomanNumerals = new RomanNumeralsCreator

RomanNumerals.toRoman(1000) //?