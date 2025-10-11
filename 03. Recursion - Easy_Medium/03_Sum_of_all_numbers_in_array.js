let arr = [5, 3, 2, 0, 1];
let arr_odd = [5, 2, 0, 3, 6, 7];

function sum(n) {
  if (n == 0) {
    return arr[0];
  }
  return arr[n] + sum(n - 1);
}

const res = sum(arr.length - 1);
console.log(res); // 11

function odd_sum(n) {
  if (n == 0) {
    return arr_odd[0] % 2 ? arr_odd[0] : 0;
  }
  return (arr_odd[n] % 2 ? arr_odd[n] : 0) + odd_sum(n - 1);
}

const output = odd_sum(arr_odd.length - 1);
console.log(output); // 15
