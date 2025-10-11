function power_of_two(n) {
  if (n == 1) return true;
  else if (n < 0 || n % 2 != 0) {
    return false;
  } else {
    return power_of_two(n / 2);
  }
}

console.log(power_of_two(16));  // true
