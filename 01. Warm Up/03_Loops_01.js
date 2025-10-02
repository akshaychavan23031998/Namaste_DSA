// normal for loop
for (let i = 0; i < 5; i++) {
  console.log("HW " + i);
}

// reverse for loop
for (let i = 5; i > 0; i--) {
  console.log("HW " + i);
}

// Infine loop
// for (let i = 1; i > 0; i++) {
//   console.log("HW " + i);
// }

// For loop over an array
let arr = [5, 10, 15, 20, 25, 30, 35];

let len = arr.length;
// console.log(len); // 7

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // print all elements of the array
  if (arr[i] % 2 !== 0) {
    console.log(arr[i] + " is odd number");
  }
}

// While loop

let i = 0;
while (i < 5) {
  console.log("While Loop HW " + i);
  i++;
}
