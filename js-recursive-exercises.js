function findRecursiveFactorial(number) {
  // identify the base case
  // identify the recursive case
  // 5! = 5 * 4!
  // 5! = 5 * 4 * 3!

  // base case
  if (number < 2) {
    return number;
  }

  return number * findRecursiveFactorial(number - 1);
}

// console.log(findRecursiveFactorial(2))

function fibonacciIterative(n) {
  let starter = [0, 1];

  for (i = 2; i <= n; i++) {
    starter.push(starter[i - 1] + starter[i - 2]);
  }

  return starter[n];
}

function fibonacciIterativeRecursive(n) {
    // base case
    if(n < 2) {
        // because at index 0 = 0 && index 1 = 1
        return n
    }
    // iterative case
    return fibonacciIterativeRecursive(n - 1) + fibonacciIterativeRecursive(n - 2)
}

console.log(fibonacciIterative(7));
console.log(fibonacciIterativeRecursive(7));
