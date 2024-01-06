var maximumWealth = function(accounts) {
    let wealth = 0;
    for(let i=0; i<accounts.length; i++){
        let array= accounts[i]
        let sum = 0;
        for(let j=0; j<array.length; j++){
            sum += array[j]
            if(wealth<sum){
                wealth = sum;
            }
        }
    }
    return wealth;
};