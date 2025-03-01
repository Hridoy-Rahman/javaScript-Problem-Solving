
// function intersection(nums1, nums2) {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => a - b);
    
//     let i = 0, j = 0;
//     let result = new Set();

//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] < nums2[j]) {
//             i++;
//         } else if (nums1[i] > nums2[j]) {
//             j++;
//         } else {
//             result.add(nums1[i]);
//             i++;
//             j++;
//         }
//     }

//     return [...result];
// }

// console.log(intersection([1,2,2,1], [2,2])); // Output: [2]
// console.log(intersection([4,9,5], [9,4,9,8,4])); // Output: [9,4]
// Time Complexity O(nlogn + mlogm)





function intersection(nums1, nums2) {
    let set1 = new Set(nums1); 
    let result = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num); 
        }
    }

    return [...result];
}

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4])); 

// Complexity O(m+n)

