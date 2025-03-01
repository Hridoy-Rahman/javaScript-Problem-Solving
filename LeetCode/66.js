function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits]; 
}

console.log(plusOne([1, 2, 3]));  // [1, 2, 4]
console.log(plusOne([9, 9, 9]));  // [1, 0, 0, 0]
