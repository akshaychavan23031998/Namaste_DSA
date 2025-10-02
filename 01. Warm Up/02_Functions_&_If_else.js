function Helloworld() {
  console.log("Hello World");
}

Helloworld();

function Namaste(name) {
  console.log("Namaste " + name);
}

Namaste("Akshay");
Namaste("Rahul");

function Sum(a, b) {
  const total = a + b;
  console.log("Sum " + total);
}
Sum(2, 3);
Sum(10, 20);

function Multiply(a, b) {
  const total = a * b;
  console.log("Multiply " + total);
}
Multiply(2, 3);
Multiply(10, 20);

function sequre(a) {
  return a * a;
}
const squr = sequre(10);
console.log(squr);
const squr1 = sequre(8);
console.log(squr1);

// Write a function which accepts the age and tells the user is eligible or not to vote.

function eligibleToVote(age) {
  if (age < 0) {
    console.log(age + " Invalid age");
  } else if (age > 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}
eligibleToVote(-1);
eligibleToVote(20);
eligibleToVote(10);

// Create a funcion to check the number is even or odd
function checkEvenOrOdd(number) {
  const rem = number % 2;
  if (rem == 0) {
    console.log(number + " Is is Even number");
  } else {
    console.log(number + " Is is Odd number");
  }
}
checkEvenOrOdd(10);
checkEvenOrOdd(3);
checkEvenOrOdd(25);
