let arr = [5, 3, 2, 0, 1];

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
    return arr[0] % 2 ? arr[0] : 0;
  }
  return (arr[n] % 2 ? arr[n] : 0) + odd_sum(n - 1);
}

const output = odd_sum(arr.length - 1);
console.log(output); // 9
