// // Algorithm: Counting method
// var isGreater = function(totalCandies, candies, i){
//     let count = 0;

//     for(let index=0; index<candies.length; index++){
//         if(i != index){
//             if(totalCandies >= candies[index]) count ++;
//         }
//     }

//     if(count == candies.length - 1){
//         return true;
//     } else {
//         return false;
//     }
// }

// // Algorithm: Counting method: Iteration 2
// var isGreater = function(totalCandies, candies, i){
//     let count = 0;

//     for(let index=0; index<candies.length; index++){
//         if(totalCandies >= candies[index]) count ++;
//     }

//     if(count == candies.length){
//         return true;
//     } else {
//         return false;
//     }
// }

// // Algorithm: Counting method: Iteration 3
// var isGreater = function(totalCandies, candies){
//     let count = 0;
//     for(let index=0; index<candies.length; index++) if(totalCandies >= candies[index]) count ++;
//     return count == candies.length;
// }

// Algorithm: Counting method: Iteration 4
// Time Complexity: O(N)
// var isGreater = function(totalCandies, candies){
//     return (candies.filter(candy => totalCandies >= candy)).length == candies.length;
// }

// // Algorithm: Assumption Method
// var isGreater = function(totalCandies, candies){
//     let assumption = true;

//     for(let i=0; i<candies.length; i++){
//         if(totalCandies < candies[i]){
//             assumption = false;
//         }
//     }

//     return assumption;
// }

// Algorithm: Assumption Method: Iteration 1
// Time Complexity: O(N)
// var isGreater = function(totalCandies, candies){
//     let assumption = true;

//     for(let i=0; i<candies.length; i++){
//         if(totalCandies < candies[i]){
//             assumption = false;
//             break;
//         }
//     }

//     return assumption;
// }

// // Algorithm: Assumption Method: Iteration 2
// // Time Complexity: O(N)
// var isGreater = function(totalCandies, candies){
//     for(let i=0; i<candies.length; i++) if(totalCandies < candies[i]) return false;
//     return true;
// }

// // Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create an empty boolean array <- result
//     let result = [];

//     // iterate or loop through the candies array for i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every value in the candies array, find the total number of candies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than or equal to all the other kids candies
//         if(isGreater(totalCandies, candies)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else if false => push false to the result array
//             result.push(false);
//         }
//     }
            
//     // return the result array
//     return result;
// };

// // Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create an empty boolean array <- result
//     let result = [];

//     // iterate or loop through the candies array for i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every value in the candies array, find the total number of candies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         let greatestCandy = Math.max(...candies);

//         // check if the totalCandies is greater than or equal to all the other kids candies
//         if(totalCandies >= greatestCandy){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else if false => push false to the result array
//             result.push(false);
//         }
//     }
            
//     // return the result array
//     return result;
// };

// // Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create an empty boolean array <- result
//     let result = [];

//     let greatestCandy = Math.max(...candies);

//     // iterate or loop through the candies array for i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every value in the candies array, find the total number of candies <- totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than or equal to all the other kids candies
//         if(totalCandies >= greatestCandy){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else if false => push false to the result array
//             result.push(false);
//         }
//     }
            
//     // return the result array
//     return result;
// };

// // Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i in candies) result.push(candies[i] + extraCandies >= greatestCandy);
//     return result;
// };

// // Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => result.push(candy + extraCandies >= greatestCandy));
//     return result;
// };

// // Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => candy + extraCandies >= greatestCandy);
//     return result;
// };

// // Time Complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// Time Complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};

/*
    Algorithm:

    create an empty boolean array <- result

    iterate or loop through the candies array for i <- 0 to candies.length - 1

        for every value in the candies array, find the total number of candies <- totalCandies

        check if the totalCandies is greater than or equal to all the other kids candies

            if true => push true to the result array

            else if false => push false to the result array

    return the result array
*/

/*
    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
    
    extraCandies = 3

    Todo: result boolean array (n) []

    result = [T, T, T, F, T]
             [0][1][2][3][4]

    when i = 0; result[0] = ?

        candies[0] + extraCandies
        2 + 3
        5 >= [3, 5, 1, 3]
             [1][2][3][4]
    
    when i = 1; result[1] = ?

        candies[1] + ec
        3 + 3
        6 >= [2, 5, 1, 3]
             [0][2][3][4]
    
    when i = 2; result[2] = ?

        candies[2] + ec
        5 + 3
        8 >= [2, 3, 1, 3]
             [0][1][3][4]

    when i = 3; result[3] = ?

        candies[3] + ec
        1 + 3
        4 >= [2, 3, 5, 3]
             [0][1][2][4]
    
    when i = 4; result[4] = ?

        candies[4] + ec
        3 + 3
        6 >= [2, 3, 5, 1]
             [0][1][2][3]
    
*/