function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == tar) {
      return i;
    }
  }
  return -1;
}

let array = [4, 9, 1, 0, 2];
const res = linearSearch(array, 0);
console.log(res);       // 3

const res1 = linearSearch(array, 10);
console.log(res1);      // -1
