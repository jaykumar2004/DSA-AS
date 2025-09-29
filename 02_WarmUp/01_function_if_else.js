//functions, if else
function vote(age) {
  if (age < 0) {
    console.log("Invalid Age");
  } else if (age <= 18) {
    console.log("Not Eligible to vote :(");
  } else {
    console.log("Eliglible To Vote :)");
  }
}
//vote(20);

// odd even
function oddEven(number) {
  if (number % 2 == 0) {
    console.log("Even");
  } else {
    console.log("odd");
  }
}
oddEven(3);
