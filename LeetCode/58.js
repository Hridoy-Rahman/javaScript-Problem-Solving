var lengthOfLastWord = function(s) {
    let result = s.trimEnd().split(' ').pop().length;
    return result
};