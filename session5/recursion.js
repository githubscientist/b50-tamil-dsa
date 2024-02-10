/*
    Recursion

        - Recursion is a function that calls itself!
*/

/*
    Functions

        - a function is a block of code that can be called by name and executed as many times as needed

    Function Types - parameters and return value
        - function with no parameters and no return value
        - function with parameters and no return value
        - function with no parameters and return value
        - function with parameters and return value
    
    Function Types
        - named function
        - anonymous function or nameless function
        - arrow function
        - IIFE (Immediately Invoked Function Expression)
*/

// function with no parameters and no return value
// function sayHello() {
//     console.log('hello');
// }

// sayHello();

// function with parameters and no return value
// function sayHello(name, age=25) {
//     console.log(`hello ${name}, you're ${age} years old!`);
// }

// sayHello('sathish', 30);

// function with no parameters and return value
// function sayHello() {
//     return `hello`;
// }

// console.log(sayHello());

// function with parameters and return value
// function sayHello(name) {
//     return `hello ${name}`;
// }

// console.log(sayHello('krish'));

// -----------------------------------------------------------

// named function
// function sayHello() {
//     console.log('hello');
// }

// sayHello();

// anonymous function
// let sayHello = function () {
//     console.log('hello');
// }

// sayHello();

// arrow function
// let sayHello = () => {
//     console.log('hello');
// }

// sayHello();

// IIFE: Immediately Invoked Function Expression
// (() => {
//     console.log('hello');
// })();

// (function () {
//     console.log('hello');
// })();

// --------------------------------------------------

// recursion is a function that calls itself.!

// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*
    recursion tree

    sayHello()
       - console.log('hello')
       - sayHello()
            - console.log('hello')
            - sayHello()
                - console.log('hello')
                - sayHello()
                    ...
                    ...

*/

// Problem: Write a function that prints the hello message for N times

// iterative way
// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }

// sayHello(5);

// function sayHello(N) {
//     if (N === 0) return;

//     console.log('hello');
//     sayHello(N - 1);
// }

// sayHello(5);

/*
    sayHello(5)
        - console.log('hello')
        - sayHello(4)
            - console.log('hello')
            - sayHello(3)
                - console.log('hello')
                - sayHello(2)
                    - console.log('hello')
                    - sayHello(1)
                        - console.log('hello')
                        - sayHello(0)
                            - return
*/

/*
    Problem: Write a function that prints the numbers from N to 1.

    Input: 5

    Output:

    5
    4
    3
    2
    1
*/

// function printNumbers(N) {
//     if (N === 0) return;

//     console.log(N);
//     printNumbers(N - 1);
// }

// printNumbers(5);

/*
    printNumbers(5)
        - N = 5; 5 == 0; false
        - console.log(5)
        - printNumbers(4)
            - N = 4; 4 == 0; false
            - console.log(4)
            - printNumbers(3)
                - N = 3; 3 == 0; false
                - console.log(3)
                - printNumbers(2)
                    - N = 2; 2 == 0; false
                    - console.log(2)
                    - printNumbers(1)
                        - N = 1; 1 == 0; false
                        - console.log(1)
                        - printNumbers(0)
                            - N = 0; 0 == 0; true => return
    
    printNumbers(5)
*/

// function printNumbers(N) {
//     if (N === 0) return;

//     printNumbers(N - 1);
//     console.log(N);
// }

// printNumbers(5);

/*
    printNumbers(5)
        - N = 5; 5 == 0; false
        - printNumbers(4)
            - N = 4; 4 == 0; false
            - printNumbers(3)
                - N = 3; 3 == 0; false
                - printNumbers(2)
                    - N = 2; 2 == 0; false
                    - printNumbers(1)
                        - N = 1; 1 == 0; false
                        - printNumbers(0)
                            - N = 0; 0 == 0; true => return
                        - console.log(1)
                    - console.log(2)
                - console.log(3)
            - console.log(4)
        - console.log(5)
*/

/*
    Problem: Write a function that returns the sum of numbers from 1 to N.

    Input: 5

    Output: 15

    5 + 4 + 3 + 2 + 1 = 15

    Input: 3

    Output: 6

    3 + 2 + 1 = 6
*/

// let sum = 0;

// function S(N) {
//     if (N == 0) return sum;

//     sum = sum + N;
//     return S(N - 1);
// }

// console.log(S(5));

// function S(N, sum = 0) {
//     if (N == 0) return sum;

//     sum = sum + N;
//     return S(N - 1, sum);
// }

// console.log(S(5));

// function S(N, sum = 0) {
//     if (N == 0) return sum;

//     return S(N - 1, sum + N);
// }

// console.log(S(5));

// Recurrence Relation Method

// Mathematical relation that defines a sequence recursively.

/*
    S(N) = ?

    We should start from the base case.

    For N = 1, S(1) = 1
    For N = 2, S(2) = 2 + 1 = 3
    For N = 3, S(3) = 3 + 2 + 1 = 6
    For N = 4, S(4) = 4 + 3 + 2 + 1 = 10
    For N = 5, S(5) = 5 + 4 + 3 + 2 + 1 = 15

    --------------------------------------------

    Backward Approach

    For N = 1, S(1) = 1

    For N = 2, S(2) = 2 + S(1) = 3
    For N = 3, S(3) = 3 + S(2) = 6
    For N = 4, S(4) = 4 + S(3) = 10
    For N = 5, S(5) = 5 + S(4) = 15

    General Form

    For N = 1, S(N) = 1
    For N > 1, S(N) = N + S(N - 1)
*/

// function S(N) {
//     // For N = 1, S(N) = 1
//     if (N == 1) return 1;

//     // For N > 1, S(N) = N + S(N - 1)
//     return N + S(N - 1);
// }

// console.log(S(10));

/*
    Problem: Write a function that returns the factorial of a number.

    Input: 5

    Output: 120

    Explanation: 5 * 4 * 3 * 2 * 1 = 120

    Input: 3

    Output: 6

    Explanation: 3 * 2 * 1 = 6
*/

// function F(N) {
//     if (N == 0) return 1;
//     if (N == 1) return 1;
//     return N * F(N - 1);
// }

// console.log(F(0));

function F(N) {
    if (N == 0 || N == 1) return 1;
    return N * F(N - 1);
}

console.log(F(4));

/*
    Problem: Write a recursion function to find the Nth Fibonacci number.

    Input: 5

    Output: 3

    Explanation: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
*/