// Approach 2nd:    TC = O(m+n);    SC = O(m);
let n1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let n2 = [2, 5, 6];
let n = 3;

function merge_sortedArray(nums1, m, nums2, n) {
  let nums1copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1copy[p1] < nums2[p2])) {
      nums1[i] = nums1copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}

const res = merge_sortedArray(n1, m, n2, n);
console.log(res);

// Approach 3rd: with out using an extra space for the n1copy
//
function approach_3(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}

const merge = approach_3(n1, m, n2, n);
console.log(merge);
