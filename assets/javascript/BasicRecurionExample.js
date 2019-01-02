const countdownFrom = num => {
  console.log(num)
  if (num !== 0) return countdownFrom(num - 1)
}
