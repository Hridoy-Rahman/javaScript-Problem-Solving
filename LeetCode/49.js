/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(word of strs){
        let sorted = word.split('').sort().join('');
        if(!map.has(sorted)){
            map.set(sorted,[])
        }

        map.get(sorted).push(word);
    }
    return Array.from(map.values())
};