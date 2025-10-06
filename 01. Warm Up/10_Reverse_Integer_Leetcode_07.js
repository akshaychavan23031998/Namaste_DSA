// Leet code prblem No. 07: Reverse Integer.

function reverseInteger(n) {
  let nCopy = n;
  let rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  return nCopy < 0 ? -rev : rev;
}
let num = 123456;
const res = reverseInteger(num);
console.log(res);
