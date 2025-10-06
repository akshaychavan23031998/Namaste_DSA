let array = ["h", "e", "l", "l", "o"];
let len = array.length;
let halflen = len / 2;

function reverseString(arr) {
  for (let i = 0; i < halflen; i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
  return arr;
}

const res = reverseString(array);
console.log(res);
