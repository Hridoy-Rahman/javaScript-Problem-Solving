var arrayStringsAreEqual = function(word1, word2) {
    let word = "";
    let word3 = "";
    for (let i = 0; i < word1.length; i++) {
        word += word1[i];
    }
    for (let i = 0; i < word2.length; i++) {
        word3 += word2[i];
    }
    return word === word3;
};

let word1 = ["a", "cb"];
let word2 = ["ab", "c"];
console.log(arrayStringsAreEqual(word1, word2));
