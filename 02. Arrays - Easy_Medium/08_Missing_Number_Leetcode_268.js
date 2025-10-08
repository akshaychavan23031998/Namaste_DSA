let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
function Missing_Number(nums) {
  let n = nums.length;
  let TS = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
  }
  return TS - sum;
}

const res = Missing_Number(arr);
console.log(res);
