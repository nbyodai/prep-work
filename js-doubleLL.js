class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // add to back of my list
        const node = new Node(value)
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    prepend(value) {
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.length++;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(array)
        return array;
    }
    insert(index, value) {
        // we start by creating the node
        if (index >= this.length) {
            return this.append(value);
        }
        const node = new Node(value);
        const leadInsert = this.traverseToNode(index - 1)
        const followInsert = leadInsert.next;
        leadInsert.next = node;
        node.next = followInsert;
        this.length++;
    }

    remove(index) {
        // check if it
        const leadRemove = this.traverseToNode(index - 1);
        const removeNode = this.leadRemove.next;
        leadRemove.next = removeNode.next;
        return this.printList()
    }

    traverseToNode(preIndex) {
        let currentNode = this.head;
        let counter = 0;
        while(counter !== preIndex) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(3, 88);
myLinkedList.printList()
// 1 --> head -->

// console.log(myLinkedList)

