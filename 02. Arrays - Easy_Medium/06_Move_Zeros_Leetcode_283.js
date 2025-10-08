const nums = [0, 1, 0, 3, 12];

function move_zeros(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

const res = move_zeros(nums);
console.log(res);
