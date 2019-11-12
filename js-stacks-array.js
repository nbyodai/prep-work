// STACKS

// youtube
// udemy
// google

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.container = [];
  }

  peek() {
    if (this.container.length <= 0) {
      return undefined;
    }
    return this.container[this.container.length - 1];
  }

  push(value) {
    this.container.push(value);
    return this
  }
  pop() {
    this.container.pop();
    return this;
  }
  isEmpty() {
    return this.container.length === 0;
  }
}

const myStack = new Stack();
let ans;
ans = myStack.isEmpty();
ans = myStack.peek();

myStack.push("google");
ans = myStack.peek();
myStack.push("udemy");
ans = myStack.peek();
// myStack.push("discord");

// console.log(myStack);

myStack.pop()
myStack.pop()
myStack.pop()
ans = myStack.peek();
console.log(myStack)


console.log(ans);
