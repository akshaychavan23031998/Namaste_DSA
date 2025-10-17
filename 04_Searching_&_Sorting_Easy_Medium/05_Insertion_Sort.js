let array = [7, 1, 5, 4, 3, 2];
function Insertion_Sort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1; // index of previous elemnt.
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

const res = Insertion_Sort(array);
console.log(res); //[ 1, 2, 3, 4, 5, 7 ]

// TC = O(n^2);
// SC = O(1);
