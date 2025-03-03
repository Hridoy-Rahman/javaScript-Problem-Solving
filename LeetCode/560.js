// Time Complexity O(n^2)


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//     let count = 0;
//     for(let start =0; start< nums.length; start++){
//         let sum =0;
//         for(let end= start; end<nums.length; end++){
//             sum += nums[end];
//             if(sum === k){
//                 count++
//             }
//         }
//     }

//     return count;
// };



function subarraySum(nums, k) {
    let prefixSumMap = new Map();
    prefixSumMap.set(0, 1); // Initial sum = 0

    let count = 0, sum = 0;

    for (let num of nums) {
        sum += num;
        if (prefixSumMap.has(sum - k)) {
            count += prefixSumMap.get(sum - k);
        }
        prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
    }

    return count;
}

console.log(subarraySum([1,1,1], 2)); // Output: 2
