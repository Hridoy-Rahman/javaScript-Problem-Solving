

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // Bruteforce  O(n^2)
   // for(let i=0; i<nums.length; i++){
   //     for(let j= i+1; j<nums.length; j++){
   //         if( nums[i] + nums[j]=== target )
   //             return [i,j]
   //     }
   // }
    
    
    // using hasmap Time complexity O(n)
    const map = new Map()
    
    for(let i=0; i<nums.length; i++){
        complement = target - nums[i];
        
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        
        map.set(nums[i],i)
    }
    
    return [];
};

