var numIdenticalPairs = function(nums) {
    let goodPair = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]===nums[j]){
                goodPair++;
            }
        }
    }
    return goodPair; 
};

console.log(numIdenticalPairs([1,1,1,1]))