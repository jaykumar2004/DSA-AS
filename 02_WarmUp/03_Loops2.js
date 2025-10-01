// write a function that searches for an element in an array and returns the index, if the element is not present return -1
function findKey(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
let arr = [4, 2, 0, 10, 8, 30];

let result = findKey(arr, 10);

// console.log(result);

//Write a fun that returns the number of negative numbers in an array

function negativeNumber(arr_two) {
  let count = 0;
  for (let i = 0; i < arr_two.length; i++) {
    if (arr_two[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr_two = [1, -2, 3, 4, -6, -9];

let res = negativeNumber(arr_two);

// console.log(res);

//write a function that returns the largest number in an array

function largest(largest_arr) {
  let largest = -Infinity; //or we can write let largest = arr[0];
  //   let largest = arr[0];

  for (let i = 0; i < largest_arr.length; i++) {
    if (largest_arr[i] > largest) {
      largest = largest_arr[i];
    }
  }
  return largest;
}

let largest_arr = [3, 4, 6, 7, 12, 90];

let result_three = largest(largest_arr);
console.log(res);
HTMLFormControlsCollection.log(result_three);
console.log(result_three)