function sumMultipleArgs(...args) {
    return args.reduce((a, b) => a + b)
  }

console.log(sumMultipleArgs(1, 2, 3)) //?