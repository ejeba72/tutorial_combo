// function recursion(n) {
//   console.log(n);
//   recursion('time');
// }

// function recursion(n) {
//   console.log(n);
//   recursion('flower');
// }

// const m = 5;
// function recursion(n) {
//   console.log(n);
//   recursion('flower');
//   if (k = 1) return
//   k = m - 1;
// }

// function recursion(n) {
//   if (n <= 0) return;
//   console.log('fruit and flower');
//   recursion(n-1);
// }

console.log('fruit');
function recursion(n) {
  if ( n <= 0 ) return;
  console.log('flower');
  const m = n - 1;
  recursion(m)
}

// recursion('fruit');
recursion(5);












