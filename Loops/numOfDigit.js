// Number Of Digits in an Integer

function numOfDigits(num){
    let count=0;
    while(num>0){
        let i = num%10;
        count++;
        num = Math.floor(num/10)
    }

    return count;
}

console.log(numOfDigits(12344334))