// function recursion(n) {
//   if (n <= 1) return 1
//   return recursion(n-1)
// }

// function recursion(n) {
//   if (n <= 2) return 25
//   return recursion(n-1)
// }

// function recursion(n) {
//   n;
//   if (n > 1) return recursion(n - 1);
// }

// function rec() {
//  return `hello, world`
// }

function recursion(n) {
  if (n <= 1) return n;
  return recursion(n - 1);
}

console.log(recursion(5))