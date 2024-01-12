var maxProfit = function(prices) {
    let l = 0;
    let r=1;
    let max_profit =0;

    while(r < prices.length){
        if(prices[l] <= prices[r]){
            let profit = prices[r] - prices[l];
            max_profit = Math.max(max_profit, profit);
        }
        else{
            l = r;
        }

        r++
    }
    return max_profit;
};