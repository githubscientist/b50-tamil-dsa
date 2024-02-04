class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        // create a node
        let newNode = new Node(data);

        if (this.head === null) {
            // list is empty
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;

            this.head = newNode;
        }
    }

    toArray() {
        // implement this function
        let nodes = [];

        while (this.head != null) {
            nodes.push(this.head.data);
            this.head = this.head.next;
        }

        return nodes;
    }
}

let dlist = new DoubleList();

dlist.insertAtHead(3);
dlist.insertAtHead(5);
dlist.insertAtHead(7);
dlist.insertAtHead(10);

console.log(dlist.toArray());
console.log(dlist.toArray());