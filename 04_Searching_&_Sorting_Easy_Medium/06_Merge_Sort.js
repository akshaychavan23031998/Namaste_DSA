let array = [7, 1, 5, 4, 3, 2];

// Divide the array and merge the array.
function merge_sort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = merge_sort(arr.slice(0, mid));
  let right = merge_sort(arr.slice(mid));

  return merge(left, right);
}

// Merge 2 sorted array.
function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

const output = merge_sort(array);
console.log(output); //[ 1, 2, 3, 4, 5, 7 ]

// in Divide phase we hv TC of log n.
// in mereg phase the TC is O(n)
// so finally TC = O(n log n);
// SC = O(n);
