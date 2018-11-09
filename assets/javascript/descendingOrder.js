/**
|--------------------------------------------------
| Descending Order
| 
| Your task is to make a function that can take any non-negative integer 
| as a argument and return it with its digits in descending order.
| 
| Essentially, rearrange the digits to create the highest possible number.
| 
| Examples:
| Input: 21445 Output: 54421
| Input: 145263 Output: 654321
| Input: 1254859723 Output: 9875543221
|--------------------------------------------------
*/

const descendingOrder = num => Number(String(num).split('').sort().reverse().join(''))

const answer = descendingOrder(123456789) //?
typeof(answer) //?

/**
|--------------------------------------------------
| Test.assertEquals(descendingOrder(0), 0)
| Test.assertEquals(descendingOrder(1), 1)
| Test.assertEquals(descendingOrder(123456789), 987654321)
|--------------------------------------------------
*/