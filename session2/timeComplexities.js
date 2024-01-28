/*
    Problem:

        - Algorithm 1
        - Algorithm 2
        - Algorithm 3

    If we want to find the best algorithm, we need to find the time complexity of each algorithm.

    Either to compare one algorithm with another or to evaluate the performance of an algorithm, we need the performance factors.
        - Time Complexity: How much time does it take to run an algorithm?
        - Space Complexity: How much memory does it take to run an algorithm?
    
    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' Notation - Upper Bound
    2. Big - 'Omega' Notation - Lower Bound
    3. Big - 'Theta' Notation - Tight Bound (Upper and Lower Bound)

    Situations/Cases: Input

    1. Best Case: The best case is when the algorithm takes the least amount of time to run.
    2. Average Case: The average case is when the algorithm takes the average amount of time to run.
    3. Worst Case: The worst case is when the algorithm takes the maximum amount of time to run.

    Example: Linear Search

    Algorithm: Given a list of numbers and a number to search, find the index of the number in the list.

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    1. Best Case: The number is the first element in the list.
       If the key = 1, then the index = 0
       number of comparisons = 1
       time complexity = O(1) - Constant Time (Order of 1 or 'Oh' of 1)
    
    2. Average Case: The number is in the middle of the list.
       If the key = 5, then the index = 4
       number of comparisons = 5
       time complexity = O(n/2) = O(n) - Linear Time
    
    3. Worst Case: The number is the last element in the list.
        If the key = 10, then the index = 9
        number of comparisons = 10
        time complexity = O(n) - Linear Time

       Worst Case: The number is not in the list.
       If the key = 11, then the index = -1
       number of comparisons = 10
       time complexity = O(n) - Linear Time

*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity: ?

    Choices:

    O(1)
    O(log n)
    O(n)
    O(n log n)
    O(n^2)
    O(2^n)
    O(n!)

    Answer: O(n + m) = O(n) + O(m) = O(n) + O(n) = O(2n) = O(n)

    Solution:

    let a = 0, b = 0; // declarations, initializations, asssignments, conditionals, ...
    number of executions = 1

    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    number of executions = values of i
                         = 0, 1, 2, 3, 4, ..., N - 1
                         = N


    for (j = 0; j < M; j++) {
        b = b + rand();
    }
    number of executions = values of j
                         = 0, 1, 2, 3, 4, ..., M - 1
                         = M
    
    Time Complexity T(N, M) = 1 + N + M
                            = N + M (Ignoring 1 as it is a constant)
                            = O(N + M)
*/

/*
    Example 2:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand(); // O(1)
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    Time Complexity: ?

    let a = 0, b = 0;
    => number of executions = 1

    for (i = 0; i < N; i++) {
        a = a + rand(); // O(1)
    }
    => number of executions = values of i
                            = 0, 1, 2, 3, 4, ..., N - 1
                            = N
    
    for (j = 0; j < N; j++) {
        b = b + rand();
    }
    => number of executions = values of j
                            = 0, 1, 2, 3, 4, ..., N - 1
                            = N
    
    Time Complexity T(N) = 1 + N + N
                         = 1 + 2N
                         = 2N (as 1 is a constant)
                         = N (Ignoring 2 as it is a constant)
                         = O(N)
*/

/*
    Example: 3

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Time Complexity: ?


    Method 1: Counting the number of executions

    let a = 0, b = 0;
    => number of executions = 1

    outer loop: number of executions = N

    inner loop: number of executions = N

    Time Complexity T(N) = 1 + N * N
                         = 1 + N^2
                         = N^2 (Ignoring 1 as it is a constant)
                         = O(N^2)
    
    Method 2: Substitution Method

    a. Assume some values for N

    N = 4
    N = 5
    N = 6

    b. Substitute the value and find the number of executions for all the assumed values of N

    N = 4
        i = 0; j = 0, 1, 2, 3 => 4
        i = 1; j = 0, 1, 2, 3 => 4
        i = 2; j = 0, 1, 2, 3 => 4
        i = 3; j = 0, 1, 2, 3 => 4

        number of executions = 4 + 4 + 4 + 4 = 16
    
    N = 5
        i = 0; j = 0, 1, 2, 3, 4 => 5
        i = 1; j = 0, 1, 2, 3, 4 => 5
        i = 2; j = 0, 1, 2, 3, 4 => 5
        i = 3; j = 0, 1, 2, 3, 4 => 5
        i = 4; j = 0, 1, 2, 3, 4 => 5

        number of executions = 5 + 5 + 5 + 5 + 5 = 25
    
    N = 6
        i = 0; j = 0, 1, 2, 3, 4, 5 => 6
        i = 1; j = 0, 1, 2, 3, 4, 5 => 6
        i = 2; j = 0, 1, 2, 3, 4, 5 => 6
        i = 3; j = 0, 1, 2, 3, 4, 5 => 6
        i = 4; j = 0, 1, 2, 3, 4, 5 => 6
        i = 5; j = 0, 1, 2, 3, 4, 5 => 6

        number of executions = 6 + 6 + 6 + 6 + 6 + 6 = 36

    c. Find the pattern and Generalize it

    For N = 4, number of executions = 16
    For N = 5, number of executions = 25
    For N = 6, number of executions = 36

    Generalizing:

    For a given N, number of executions = N^2

    d. Calculate the time complexity, T(N)

    T(N) = 1 + N^2
         = N^2 (Ignoring 1 as it is a constant)
         = O(N^2)

*/

// let N = 10;
// let executions = 0;
// for (let i = 0; i < N; i++){
//     executions++;
// }

// for (let j = 0; j < N; j++){
//     executions++;
// }

// console.log(executions); // 2N

// let N = 5;
// let executions = 0;
// for (let i = 0; i < N; i++){
//     for (let j = 0; j < N; j++){
//         executions++;
//     }
// }

// console.log(executions); // N * N = N^2

/*
    Example: 4

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time Complexity: ?

    Method 2: Substitution Method

    a. Assume some values for N

    N = 4
    N = 5
    N = 6

    b. Substitute the value and find the number of executions for all the assumed values of N

    N = 4
        i = 0; j = 4, 3, 2, 1 => 4
        i = 1; j = 4, 3, 2 => 3
        i = 2; j = 4, 3 => 2
        i = 3; j = 4 => 1
    
        number of executions = 4 + 3 + 2 + 1 = 10
    
    N = 5
        i = 0; j = 5, 4, 3, 2, 1 => 5
        i = 1; j = 5, 4, 3, 2 => 4
        i = 2; j = 5, 4, 3 => 3
        i = 3; j = 5, 4 => 2
        i = 4; j = 5 => 1

        number of executions = 5 + 4 + 3 + 2 + 1 = 15
    
    N = 6
        i = 0; j = 6, 5, 4, 3, 2, 1 => 6
        i = 1; j = 6, 5, 4, 3, 2 => 5
        i = 2; j = 6, 5, 4, 3 => 4
        i = 3; j = 6, 5, 4 => 3
        i = 4; j = 6, 5 => 2
        i = 5; j = 6 => 1

        number of executions = 6 + 5 + 4 + 3 + 2 + 1 = 21

    c. Find the pattern and Generalize it

    For N = 4, number of executions = 10
    For N = 5, number of executions = 15
    For N = 6, number of executions = 21

    number of executions = N + (N - 1) + (N - 2) + ... + 3 + 2 + 1
                         = Sum of first N natural numbers
                         = S(n)

    S(n) = n + (n-1) + (n-2) + ... + 3 + 2 + 1
    S(n) = 1 + 2 + 3 + ........ + (n-2) + (n-1) + n

    ----------------------------------------------

    Sum the above two equations:

    2 * S(n) = (n + 1) + (n + 1) + (n + 1) + ... + (n + 1) + (n + 1) + (n + 1)
    2 * S(n) = n * (n + 1)
    S(n) = (n * (n + 1)) / 2

    d. Calculate the time complexity, T(N)

    T(N) = 1 + (N * (N + 1)) / 2
         = (N * (N + 1)) / 2 (Ignoring 1 as it is a constant)
         = N^2 / 2 + N / 2
         = N^2 / 2 (Ignoring N / 2 as it is a constant)
         = O(N^2)
*/

/*
    Example: 5

    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    } 

    Time Complexity: ?

    Solution:

    Method 2: Substitution Method

    a. Assume some values for N
    b. Substitute the value and find the number of executions for all the assumed values of N
    c. Find the pattern and Generalize it
    d. Calculate the time complexity, T(N)

*/