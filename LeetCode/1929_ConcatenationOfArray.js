var getConcatenation = function(nums) {
    const newArry=[...nums,...nums]
    return newArry
};

console.log(getConcatenation([12,23,34,45]))