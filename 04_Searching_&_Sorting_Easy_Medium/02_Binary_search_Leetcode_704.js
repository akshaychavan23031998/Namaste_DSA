function binarySearch(arr, tar) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let mid = Math.floor(left + right) / 2;

    if (tar == arr[mid]) {
      return mid;
    } else if (tar < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

let nums = [-1, 0, 3, 5, 9, 12];
const res = binarySearch(nums, 9);
console.log(res); // 4

const res1 = binarySearch(nums, 2);
console.log(res1); // -1

const res2 = binarySearch([5], 5);
console.log(res2); // 0

// TC = O(logn);
