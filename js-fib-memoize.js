let calculations = 0;
function fib(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
console.log(calculations);

let calculations2 = 0;
function fibMaster() {
  let cache = {};
  return function fib(n) {
    calculations2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibMaster()

console.log(fasterFib(10));
console.log(calculations2);
