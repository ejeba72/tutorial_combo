// FIBONACCI SEQUENCE (USING FOR LOOP)
function fibonacci(n) {
  const fib = [0, 1];
  for(let i=2; i<=n; i++){
      fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}
// console.log(fibonacci(6));

// RECURSIVE FIBONACCI SEQUENCE
// function reFib(n) {
//   reFib(0) === 0;
//   reFib(1) === 1;
//   console.log(refib(n-1))
//   // return reFib(n-1) + reFib(n-2);
// }
// console.log(reFib(6))

function reFib(n) {
  if (n < 2) {
    return n;
  }
  return reFib(n-1) + reFib(n-2)
}
console.log(reFib(6));