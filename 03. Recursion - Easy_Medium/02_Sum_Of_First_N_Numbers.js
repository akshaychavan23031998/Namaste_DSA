function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

const res = sum(50);
console.log(res);
