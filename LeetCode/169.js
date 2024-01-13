var majorityElement = function(nums) {
    let result = 0;
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if( count == 0){
            result = nums[i];
            count =  1;
        }
        else if(result == nums[i]){
            count++;
        }
        else{
            count--;
        }
    }
    return result;
 };