var hammingWeight = function(n) {
    let bit = 1;
    let count = 0;
    for(let i=0; i<32; i++){
        if(n & bit){
            count++;
        }
        n >>= bit;
    }
    return count;
};