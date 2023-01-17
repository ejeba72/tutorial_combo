// function recursion(n) {
//   if (n <= 1 ) {
//     console.log(1)
//     return
//   }

//   console.log(n);

//   const m = n - 1;

//   recursion(m);
// }

function recursion(n) {
  if (n <= 1 ) {
    console.log(1)
    return
  }

  console.log(n);

  recursion(n-1);
}

// function recursion(n) {
//   if (n <= 1 ) {
//     // console.log(1)
//     return n
//   }

//   // console.log(n);

//   return recursion(n-1);
// }

// function recursion(n) {
//   if (n <= 1 ) {
//     console.log(1)
//     return
//   }

//   console.log(n);

//   recursion(n-2);
// }

recursion(5);
// console.log(recursion(5))