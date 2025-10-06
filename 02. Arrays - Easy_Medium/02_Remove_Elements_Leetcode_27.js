let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let x = 0;

function removeElement(array, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != ele) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

const res = removeElement(arr, val);
console.log(res);
