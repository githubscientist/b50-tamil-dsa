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

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }
}

inp.on("close", () => {
    let expression = userInput[0];
    
    // create an empty stack
    let stack = new Stack();

    for (let index = 0; index < expression.length; index++){
        // for every character in the expression
        // check if it is a opening parantheses
        if (expression[index] === '(') {
            // push the index to the stack
            stack.push(index);
        } else if (expression[index] === ')') {
            // check if the stack is empty
            if (stack.isEmpty()) {
                // remove the parantheses from the index
                expression = expression.slice(0, index) + expression.slice(index + 1,);
                index--;
            } else {
                // stack is not empty
                // pop the stack
                stack.pop();
            }
        }
    }

    // if the stack is still not empty
    while (!stack.isEmpty()) {
        // until the stack becomes empty
        // get the index from the top of the stack
        let index = stack.peek();

        // remove the parantheses at the index
        expression = expression.slice(0, index) + expression.slice(index + 1,);

        // remove the top of the stack
        stack.pop();
    }

    // print the expression
    console.log(expression);
});