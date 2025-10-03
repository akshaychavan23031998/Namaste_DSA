// Case.01: Normal loop in loop, i and j indepent.
for (let i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    console.log("Case.01: Normal loop in loop: " + i, j);
  }
}

// Case.02: j is dependant on i.
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    console.log("Case.02: j is dependant on i: " + i, j);
  }
}

// Case.03: j is dependant on i with j<=i condition
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("Case.03: j is dependant on i with j<=i condition: " + i, j);
  }
}

// Case.04: i++ & j--.
for (let i = 0; i < 5; i++) {
  for (let j = i; j > 0; j--) {
    console.log("Case.04: i++ & j-- :" + i, j);
  }
}

// Case.05: i++ & j-- with j>=0 condition.
for (let i = 0; i < 5; i++) {
  for (let j = i; j >= 0; j--) {
    console.log("Case.05: i++ & j-- with j>=0 condition :" + i, j);
  }
}

// Case.06: i-- & j++.
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log("Case.06: i-- & j++ :" + i, j);
  }
}
