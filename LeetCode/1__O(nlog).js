// two pinter approch


var twoSum = function(nums, target) {
    // Create an array of objects containing the original index and value
    const numsWithIndex = nums.map((value, index) => ({ value, index }));

    numsWithIndex.sort((a, b) => a.value - b.value);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currentSum = numsWithIndex[left].value + numsWithIndex[right].value;

        if (currentSum === target) {
            return [numsWithIndex[left].index, numsWithIndex[right].index];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};