let prices = [7, 1, 5, 3, 6, 4];

function Best_time_to_buy_sell_stocks(arr) {
  let min = arr[0];
  let maxProfit = 0; //  arr[i]-min
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxProfit;
}

const res = Best_time_to_buy_sell_stocks(prices);
console.log(res);
