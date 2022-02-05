/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    console.log(prices);
    if(!Array.isArray(prices) || prices.length < 2){
        return 0;
    }
    else {
        let pricesDiff = 0, minIndex = 0;
        for(let i = 1;  i< prices.length; i++){
           if(prices[i] < prices[minIndex]){
               minIndex = i;
           }
            if(prices[i] - prices[minIndex] > pricesDiff){
                pricesDiff = prices[i] - prices[minIndex];
            }
        }
        return pricesDiff;
    }
};
