//write a function that returns the count of digits in a number

function countDigit(n) {
  if (n == 0) return 1;
  n = Math.abs(n); // changes all the negative no to positive
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10); //Math.floor because the value came in the decimal so we want the number came in the integer so we use Math.floor()
    count++;
  }
  return count;
}

let num = -12340;
console.log(countDigit(num));
