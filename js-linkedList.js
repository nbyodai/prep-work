class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length =  1
    }

    append(v){
        // add to the back
        const node = new Node(v)
        // make the current tail next pointer point to the new node
        this.tail.next = node
        // then change the current tail
        this.tail = node
        // increment the length of the list
        this.length++
        return this
    }

    prepend(v){
        // add to the front
        const node = new Node(v)
        // new node is going to next the current head
        node.next = this.head
        // then make the head our new node
        this.head = node
        return this;
    }

    traverseToNode(index){
        // the index can not be longer than the length of our list
        if(index > this.length) {
            return null
        }

        //  start from the head
        let currentNode = this.head
        // set a counter
        let counter = 0
        // while we haven't reached
        while(counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    insert(i, v){
        // we first check if the index is longer than the length and we just append
        if(i >= this.length) {
            return this.append(v)
        }
        // else create the node
        const node = new Node(v)
        // search before the index
        const leadingInsert = this.traverseToNode(i-1)
        // get what is next to current
        const followInsert = leadingInsert.next
        // make the leading insert point to our node
        leadingInsert.next = node
        // make the node point to follow
        node.next = followInsert
        this.length++

    }
    
    remove(i){
        const leadRemove = this.traverseToNode(i - 1)
        const removeNode = leadRemove.next
        leadRemove.next = removeNode.next
        return this
    }

    printList(){
        const arr = []
        let currentNode = this.head
        while(currentNode !== null) {
            arr.push(`${currentNode.value}`)
            currentNode = currentNode.next
        }
        console.log(arr.join('->'))
        return arr.join()
    }
}


// 10 2 

const myLL = new LnkedList(3)
myLL.prepend(0)
myLL.append(7)
myLL.append(20)

// myLL.printList()

myLL.insert(2, 46)
myLL.insert(80, 90)
myLL.printList()
myLL.remove(4)
myLL.printList()

