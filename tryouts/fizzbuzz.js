/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
      const divisibleby3 = i % 3 === 0;
      const divisibleby5 = i % 5 === 0;

      if (divisibleby3 && divisibleby5) {
        result.push("FizzBuzz");
      } else if (divisibleby5) {
        result.push("Buzz");
      } else if (divisibleby3) {
        result.push("Fizz");
      } else {
        result.push(i.toString());
      }
    }

    return result;
  };

  console.log(fizzBuzz(15));
