var shortestToChar = function(s, c) {
    let p= s.indexOf(c);
    let n = p;
    const distance = [];
    for(let i=0; i<s.length; i++){
        if(s[i]===c){
            p = i;
            n = s.indexOf(c, p+1)
        }

        distance.push(Math.min(Math.abs(p-i),Math.abs(n-i)))
    }

    return distance;
}