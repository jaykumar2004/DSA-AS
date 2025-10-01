// ****
// ****
// ****
// ****
// let n = 4;
// for (let i = 0; i < n; i++) {   // "i" is responsible for the rows
//   let row = " ";
//   for (let j = 0; j < n; j++) {  // "j" is responsible for the column
//     row = row + "* ";
//   }
//   console.log(row);
// }

// *
// **
// ***
// ****
// // *****
// let n = 4;
// for (let i = 0; i < 4; i++) {
//   let row = " ";
//   for (let j = 0; j <= i; j++) {  // we can also write for(let j=0;j<i+!;j++)
//     row = row + "* ";
//   }
//   console.log(row);
// }

// 1
// 12
// 123
// 1234
// 12345

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j <= i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row)
// }

// 1
// 22
// 333
// 4444
// 55555

let n = 5;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + j++;
  }
  console.log(row);
}
