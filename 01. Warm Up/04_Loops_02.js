//Problem No.01:  Search element in an array if its present then retunr its index or not then return -1;
function searchEle(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      return i;
    }
  }
  return -1;
}

let arr1 = [5, 10, -15, 200, -25, 30, 35];
const output = searchEle(arr1, 20);
console.log(output);

// Problem No. 02: write an functions that returnr the number of negative numbers in an array
function countNegNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const res = countNegNum(arr1);
console.log(res);

// Problem No. 03: write a function which return the largest number in an array.
function largestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const largestNum = largestNumber(arr1);
console.log(largestNum);
