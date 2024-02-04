class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    isEmpty() {
        return this.top == -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        if (this.top != -1) {
            return this.items[this.top];
        }
    }
}

let stack = new Stack();

stack.push(5);

console.log(stack);

