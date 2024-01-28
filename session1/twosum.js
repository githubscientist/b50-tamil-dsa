// Method: 1 Sum of All Pairs
// time complexity: O(N^2)
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
// };

// Method: 2 Hashing
// Time Complexity: O(N LogN)
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         // for every element, find the difference
//         let diff = target - nums[i];

//         // check whether the diff exists in the array
//         // if exists, find the index of that element (except the current element)
//         let index = nums.indexOf(diff, i+1);

//         if(index != -1){
//             return [i, index];
//         }
//     }
// };

// Method: 3 Two Pointers Technique
// Time Complexity: O(N)
var twoSum = function(nums, target) {
    // prepare a 2d array with their indexes
    let nums2d = nums.map((num, index) => [index, num]);

    // sort the array based on the second value in the 1d array
    nums2d.sort((a, b) => a[1]-b[1]);

    // place the two pointers
    let first = 0;
    let last = nums2d.length - 1;

    // iteratively do the following
    // check if the sum of the first & last pointers are eq, lt, or gt
    while(first < last){
        if(nums2d[first][1] + nums2d[last][1] === target){
            return [nums2d[first][0], nums2d[last][0]];
        } else if(nums2d[first][1] + nums2d[last][1] < target){
            first++;
        } else {
            last--;
        }
    }
};

