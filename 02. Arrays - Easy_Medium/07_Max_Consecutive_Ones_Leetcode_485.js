let nums = [1, 1, 0, 1, 1, 1];

function Max_Consecutive_Ones(arr) {
  let CC = 0;
  let MC = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      CC++;
    } else {
      MC = Math.max(CC, MC);
      CC = 0;
    }
  }
  return Math.max(CC, MC);
}

const res = Max_Consecutive_Ones(nums);
console.log(res);
