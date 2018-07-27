let a = 8, b = 6;
(() => {
  let c, d;
  [c, d] = [b, a]
  return [a, b] = [c, d]
})();
console.log(a); // should be 6
console.log(b); // should be 8