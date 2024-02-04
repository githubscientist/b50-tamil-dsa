class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            // list is empty
            this.head = this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;

            this.head = newNode;

            this.tail.next = this.head;
        }
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        do {
            nodes.push(thead.data);
            thead = thead.next;
        } while (thead != this.head);

        return nodes;
    }
}

let clist = new CircularList();

clist.insertAtHead(5);
clist.insertAtHead(3);
clist.insertAtHead(10);

console.log(clist.toArray());