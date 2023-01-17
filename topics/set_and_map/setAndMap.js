const arr = [ 1, 2, 4, 5 ];

const set = new Set(arr);

// console.log(arr, set);
console.log('set size = ' + set.size);
console.log('array length = ' + arr.length)

// if (arr.length === set.size) return true;

// return false;

function compare() {
  if (arr.length === set.size) return true;
  return false;
}

console.log(compare())