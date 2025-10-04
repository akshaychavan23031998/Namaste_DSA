let num = 5689;
function count_digit(n) {
  if (n == 0) return 1; // Case 1 : If n = 0, then return 1
  num = Math.abs(num); // Case 2 : If n is -ve value, then convert it into +ve value.
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

const count = count_digit(num);
console.log(count);

// Note:
// Math.floor(10.9999) ==>> 10
// Math.ceil(10.1) ==>> 11
// Math.round(10.4) ==> 10,
// Math.round(10.5) ==> 11
// Math.abs(-259) ==>> 259
