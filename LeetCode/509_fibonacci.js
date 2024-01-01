var fib = function(n) {

    if(n<2){
        return n;
    }

    let f = 0, s=1, next;
    for(let i=2; i<=n; i++){
        next= f+s;
        f = s;
        s=next;
    }
    return next;
};

console.log(fib(8))