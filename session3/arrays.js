/*
    Arrays:

    - They are built-in objects in JavaScript that can hold multiple values.
    - The values occupies consecutive memory locations(sequentially).
    - The values can be of any type.
    - The values can be accessed using index.
    - The index starts from 0.
    - methods of the array:
        - push: adds an element to the end of the array.
        - pop: removes the last element from the array.
        - shift: removes the first element from the array.
        - unshift: adds an element to the beginning of the array.
        - splice: adds or removes elements from the array.
        - slice: returns a copy of the array.
        - indexOf: returns the index of the first occurrence of the element.
        - includes: returns true if the element is present in the array.
        - sort: sorts the array.
        - find: returns the first element that satisfies the condition.
        - map: returns a new array with the results of calling a function on every element.
        - reduce: returns a single value after applying a function on every element.
        - filter: returns a new array with the elements that satisfy the condition.
*/

// to create an empty array
// let numbers = [];

// let numbers = [3, 5, 1, 2, 4];


// console.log(numbers); // prints the entire array

// console.log(numbers[0]);

// numbers[0] = 10;

// console.log(numbers);

let numbers = [3, 5, 1, 2, 4];

// to insert an element in the end of the array
numbers.push(7);

// to remove an element from the end of the array
numbers.pop();

// to insert an element in the beginning of the array
numbers.unshift(0);

// to remove an element from the beginning of the array
numbers.shift();

// to add or remove an element at any index
numbers.splice(1, 0, 7);

numbers.splice(2, 1);

// console.log(numbers.includes(17));

// console.log(numbers);

// to find the square of all the numbers
// const squarer = (value, index, array) => {
//     return value ** 2;
// }

// let squares = numbers.map(squarer);

// console.log(squares);
// console.log(numbers.map(value => value ** 2));
