class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        // first
        if(this.root === null) {
            this.root = node;
            return this;
        }
        let currentNode = this.root;
        while(true) {
            if(value < currentNode.value) {
                // left
                    // check if empty
                if(currentNode.left === null) {
                    currentNode.left = node;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // right
                if(currentNode.right === null) {
                    currentNode.right = node;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }

    }
    lookup(value) {
        if(this.root === null) {
            return false;
        }
        let currentNode = this.root;

        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                currentNode = currentNode.right;
            } else if(value === currentNode.value) {
                return currentNode
            }
        }
        return false;
    }
    remove(value) {
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode) {
            if(value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                // we have a match
                // option 1 has no right child
            }
        }

    }
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(6)
tree.insert(15)
tree.insert(1)
tree.insert(50)

// console.log(tree)

// console.log(tree.lookup(4))

//          9
//    4            20
// 1     6      15     50

