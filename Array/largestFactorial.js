arr=[1,2,6,3,8,4,5]

const largestFactorial= arr.reduce((largest,num)=>{
    let currentfactorial = 1;
    for(let i=1; i<=num; i++){
        currentfactorial *= i
    }

    return currentfactorial > largest ? currentfactorial : largest

},1)

console.log(largestFactorial)