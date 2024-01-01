var isPalindrome = function(x) {
    let num = x, reverseNum = 0

    while(num>0){
        const last = num % 10;
        reverseNum = reverseNum *10 + last;
        num = Math.floor(num/10)
    } 
    return x === reverseNum
};

console.log(isPalindrome(123))