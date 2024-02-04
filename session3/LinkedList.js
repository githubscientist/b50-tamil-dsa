/*
    Linked List

    - Abstract data type or user-defined data type
    - Consists of nodes
        - Each node has a value and a reference to the next node
        - The first node is called the head
        - The last node is called the tail
    - Chain of nodes connected by references or pointers is called a linked list
    - Operations:
        - Insertion
            - At the beginning (like unshift in arrays)
            - At the end (like push in arrays)
        - Deletion
            - At the beginning (like shift in arrays)
            - At the end (like pop in arrays)
        - Traversal
*/

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
// }


// let list = new LinkedList();

// console.log(list);

// let node1 = new Node(3);

// node1.next = new Node(5);
// node1.next.next = new Node(4);

// console.log(node1);

/*
    node1 = Node { 
        data: 3, 
        next: Node { 
            data: 5, 
            next: Node {
                data: 4,
                next: null
            } 
        } 
    }
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    toArray() {
        // create an empty array to store the data of all the nodes
        let nodes = [];

        // traverse the linked list and push every node's data into nodes array
        while (this.head != null) {
            nodes.push(this.head.data);
            this.head = this.head.next;
        }

        // return the nodes array
        return nodes;
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            // list is empty
            // the newNode is the head node of the list
            this.head = this.tail = newNode;
        } else {
            // the list is not empty
            // the list has either one or more nodes
            newNode.next = this.head;

            this.head = newNode;
        }
    }

    insertAtTail(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    deleteAtTail() {
        // only if the list is not empty
        if (this.head != null) {
            // check if the list has only one node
            if (this.head.next == null) {
                this.head = this.tail = null;
            } else {
                let thead = this.head;

                while (thead.next.next != null) {
                    thead = thead.next;
                }

                thead.next = null;
                this.tail = thead;
            }
        }
    }

    deleteAtHead() {
        if (this.head !== null) {
            if (this.head.next === null) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
            }
        }
    }

    findLength() {
        let nodes = 0;
        let thead = this.head;
        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        return nodes;
    }

    insertAtPos(index, value) {
        let length = this.findLength();
        if (length >= index) {
            // proceed with the insertion
            if (index == 0) {
                this.insertAtHead(value);
            } else if (index == length) {
                this.insertAtTail(value);
            } else {
                let thead = this.head;
                for (let i = 0; i < index - 1; i++){
                    thead = thead.next;
                }
                let newNode = new Node(value);
                newNode.next = thead.next;
                thead.next = newNode;
            }
        }
    }
}

let list = new LinkedList();

list.insertAtHead(3);
list.insertAtHead(5);

list.insertAtTail(4);

// list.deleteAtTail();
// list.deleteAtTail();

// list.deleteAtHead();list.deleteAtHead();

list.insertAtPos(2, 6);
list.insertAtPos(0, 10);
list.insertAtPos(5, 12);
list.insertAtPos(2, 15);

console.log(list.toArray());

/*
    list = LinkedList {
        head = Node {
            data: 3,
            next: null
        },
        tail = null
    }
*/