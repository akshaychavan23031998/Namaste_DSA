function secondLargest(arr) {
  let flarge = -Infinity;
  let slarge = -Infinity;
  if (arr.length < 2) {
    return "Array must be of atleast 2 elements";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > flarge) {
      slarge = flarge;
      flarge = arr[i];
    } else if (arr[i] > slarge && arr[i] != flarge) {
      slarge = arr[i];
    }
  }
  return slarge;
}

let arr = [5, 12, 200, 200, - 8, -50, 20, 200, 100, 100];
const res = secondLargest(arr);
console.log(res);
