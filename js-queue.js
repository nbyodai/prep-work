class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  isEmpty() {
    return this.length === 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
        this.last.next = node;
        this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
      if(!this.first) {
          return null
      }
      if(this.first === this.last) {
          this.last = null;
      }

      this.first = this.first.next;
      this.length--;
      return this;
  }
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir
let ans;
ans = myQueue.peek();


myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.enqueue('Samir');

// console.log(ans);
console.log(myQueue)
console.log('dequeing')
myQueue.dequeue()
console.log(myQueue)
