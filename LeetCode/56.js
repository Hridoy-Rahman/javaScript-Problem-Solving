/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]]; 

    for (let i = 1; i < intervals.length; i++) {
        let lastInterval = merged[merged.length - 1]; 
        let currentInterval = intervals[i];

        if (lastInterval[1] >= currentInterval[0]) {
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }

    return merged;
};