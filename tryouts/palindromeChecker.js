function palindromeChecker(string) {
  let front = 0;
  let back = string.length - 1;

  while (back > front) {
    if(string[front].match(/[\W_]/)) {
      front++
      continue;
    }

    if(string[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    if (string[front].toLowerCase() !== string[back].toLowerCase()) return false;

    front++;
    back--;
  }
  return true
}