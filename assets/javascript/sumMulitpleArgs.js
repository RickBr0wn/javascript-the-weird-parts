const sumMultipleArgs = (function() {
  return function sumMultipleArgs(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sumMultipleArgs(1, 2, 3)); // 6