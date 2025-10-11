let arr = [5, 3, 2, 0, 1];

function sum(n) {
  if (n == 0) {
    return arr[0];
  }
  return arr[n] + sum(n - 1);
}

const res = sum(arr.length - 1);
console.log(res);
