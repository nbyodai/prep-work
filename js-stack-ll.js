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
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
      return this.top
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
        this.top = node;
        this.bottom = node;
    } else {
        const oldTop = this.top;
        this.top = node;
        this.top.next = oldTop;
    }
    this.length++;
    return this;
  }
  pop() {
     if(!this.top)  {
         return null
     }

     if(this.top === this.bottom) {
         this.bottom = null;
     }

     const oldTop = this.top;
     this.top = this.top.next
     this.length--;
     return oldTop;
  }
  isEmpty() {
      return this.length === 0;
  }
}

const myStack = new Stack();
let ans;
ans = myStack.isEmpty()
ans = myStack.peek()


ans = myStack.isEmpty() === false
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')

console.log(myStack)

// myStack.pop('Discord')
// myStack.pop('Udemy')
// myStack.pop('google')

console.log(ans)
