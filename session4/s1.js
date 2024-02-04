// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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

// time complexity: O(n)
inp.on("close", () => {
    let words = userInput[0].split(' ');
    
    // create a new stack
    let stack = new Stack();

    // traverse the words array
    for (let word of words) {
        // check if the stack is empty
        if (stack.isEmpty()) {
            // stack is empty
            stack.push(word);
        } else {
            // stack is not empty
            // check if the top of the stack & word is equal
            if (stack.peek() == word) {
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});