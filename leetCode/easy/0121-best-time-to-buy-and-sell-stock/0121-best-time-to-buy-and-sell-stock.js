/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maximumProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // 1. 오늘 팔았을 때의 이익 계산
        const currentProfit = prices[i] - minPrice;

        // 2. 최대 이익 갱신
        if (currentProfit > maximumProfit) {
            maximumProfit = currentProfit;
        }

        // 3. 지금까지의 최소 가격 갱신
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maximumProfit;
};