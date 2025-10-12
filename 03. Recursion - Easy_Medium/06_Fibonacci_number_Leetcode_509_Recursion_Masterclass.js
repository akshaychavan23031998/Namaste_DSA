function fib(n) {
  if (n <= 1) return n; // if n = 0 return 0, if n = 1 return 1 simple.
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));    // 8

// TC = O(2^n); exponential TC.