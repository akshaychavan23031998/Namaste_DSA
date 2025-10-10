// Example 1: this will run time
function fun() {
  console.log("Namaste");
}
// fun();  // Namaste

// fun exicuted for single time as soon as run the program, what if i call it inside it ?

function fun() {
  console.log("Namaste");
  fun();        // recursive case ==>> but this will get called infinite times.
}
// fun();  // now this will call once

// Example No. 02: Recursive case => Infinite case
function fun1(n){
    console.log(n);
    n = n - 1;
    fun1(n); // 4 3 2 1 0 -1 -2 -3 ....... infinity
}
// let a = 5;
// fun1(a);    // 5

function fun1(n){
    if(n==0) return;    //  Base Condion & ==>> at n = 0 return or stop the function
    console.log(n);
    n = n - 1;
    fun1(n); // 4 3 2 1 
}
let a = 5;
fun1(a);    // 5