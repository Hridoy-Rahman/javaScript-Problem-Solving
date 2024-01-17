var maxProfit = function (prices) {
    var max_profit = 0, diff;
    for (var i = 0; i < prices.length - 1; i++) {
        diff = prices[i + 1] - prices[i];
        if (diff > 0)
            max_profit += diff;
    }
    return max_profit;
};