var arithmeticTriplets = function(nums, diff) {
    let count=0;
    const hashMap = new Map();

    for(let i=0; i<nums.length; i++){
        const value1 = nums[i]-diff;
        const value2 = nums[i] - 2*diff;

        if(hashMap.has(value1) && hashMap.has(value2)){
            count++;
        }
        hashMap.set(nums[i],nums[i])
    }

    return count;
};