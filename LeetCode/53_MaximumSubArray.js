function maxSubArray(nums) {
  let max = nums[0]; // সর্বোচ্চ যোগফল ট্র্যাক করার জন্য
  let currentMax = nums[0]; // বর্তমান সাবঅ্যারের যোগফল

  for (let i = 1; i < nums.length; i++) {
    // // বর্তমান সাবঅ্যারে যোগফল আপডেট করার জন্য
    // if (currentMax + nums[i] > nums[i]) {
    //     currentMax = currentMax + nums[i];
    // } else {
    //     currentMax = nums[i];
    // }

    // // সর্বোচ্চ যোগফল আপডেট করার জন্য
    // if (currentMax > max) {
    //     max = currentMax;
    // }


    // Another approch

    //         currentMax = currentMax + nums[i] > nums[i] ? currentMax + nums[i] : nums[i];
    //         max = currentMax > max ? currentMax : max;

    //      Another Approch using built in function

    currentMax = Math.max(nums[i], currentMax + nums[i]);
    max = Math.max(currentMax, max);
  }

  return max;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum Sum Subarray:", maxSubArray(nums));
