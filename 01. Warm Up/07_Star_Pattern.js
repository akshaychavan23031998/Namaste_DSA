// Example No. 01: print starts in sequre shape for n=4;
let n = 5;
for (let i = 0; i < n; i++) {
  // i is responsible for the number of rows.
  let row = " ";
  for (let j = 0; j < n; j++) {
    // j is responsible for the number of columns.
    row = row + " * ";
  }
  //   console.log(row); // responsible to print the *
}

// Example No. 02: print starts, in triangular patter for n=4;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row = row + " * ";
  }
  //   console.log(row);
}

// Example No. 03: print number in trianglar patter,
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row = row + [j + 1];
  }
  //   console.log(row);
}

// Example No. 04: print numbers
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  //   console.log(row);
}

// Example No. 05:
for (let i = 0; i <= n; i++) {
  let row = " ";
  for (let j = 0; j <= n - i; j++) {
    row = row + (j + 1);
  }
  //   console.log(row);
}

// Example No. 06:
for (let i = 0; i <= n; i++) {
  let row = " ";
  for (let j = 0; j <= n - i; j++) {
    row = row + " * ";
  }
  //   console.log(row);
}

// Example No. 07:
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + "_";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
//   console.log(row);
}

// Example No. 08:
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
//   console.log(row);
}

// Example No. 09:
let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
