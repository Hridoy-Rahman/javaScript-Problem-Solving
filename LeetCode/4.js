var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr =[];

    if(nums1.length>=1 && nums2.length>=1){
        mergedArr = [...nums1,...nums2];
        mergedArr = mergedArr.sort((a,b)=>a-b)
        console.log(mergedArr)
    }
    else{
        if(nums1.length===0){
            mergedArr = [...nums2]
        }
        else if(nums2.length===0){
            mergedArr = [...nums1]
        }
    }

    if(mergedArr.length%2 ===1){
        return mergedArr[(mergedArr.length-1)/2]
     }else{
         return (mergedArr[(mergedArr.length/2)-1] + mergedArr[(mergedArr.length/2)])/2
     }

};
