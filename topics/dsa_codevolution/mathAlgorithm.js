// ARITHMETIC SUM
function sum(n) {
    let num = 0
    for (i=0; i<n; i++) {
        num+=1
    }
    return num
}

// console.log(sum(13));

// FIBONACCI SEQUENCE
function fibonacci(n) {
    const fib = [0, 1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

// console.log(fibonacci(7));

// FACTORIAL (my initial approach)
/* function factorial(n) {
    let product = n;
    for(let i=0; i<n; i++) {
        n = n-1
        console.log(product);
        console.log(n);
        product = product * n
    }
    return product;
}
console.log(factorial(5)); */
// This approach is flawed. Because it is invalid for n=0 and n=1.

// FACTORIAL (a better approach)
function factorial(n) {
    let result = 1;
    console.log(`The factorial of 0 is ${result}`);
    console.log(`The factorial of 1 is ${result}`);
    for(let i=2; i<=n; i++) {
       result = result*i;
        console.log(`The factorial of ${i} is ${result}`);
        // console.log(i);
        // console.log(result);
    }
    // return result
}
// factorial(10)

// for(let i=0; i<=6; i++) {
//     console.log(i);
//     console.log(factorial(4));
// }

// // PRIME NUMBER (wrong approach)
// function isPrimeNum(n) {

//     if (n===2) {
//         return console.log(`${n} is a prime number.`);
//     }

//     let num = 1;
//     for(let i=2; i<n; i++) {
//         num = num * i;
//         // console.log(n);
//         if (n===num) {
//             console.log(n);
//            console.log(`${n} is NOT a prime number.`);
//         }
//         if (num>n) {
//             console.log(`${n} is a prime number.`);
//         }
//     }
// }
// isPrimeNum(2);


// function isPrime(n) {
//     if(n<2) {
//         return `${n} is NOT a prime number.`
//     }
    
// }

// function isPrime(n) {
//     if (n<2) return console.log(`${n} is NOT a prime number.`);
//     if (n===2) return console.log(`${n} is a prime number.`);
//     if (n===3) return console.log(`${n} is a prime number.`);
//     let half = n/2;
//     for (let i=2; i<=half; i++) {
//         console.log(`half = ${half}`)
//         console.log(`i = ${i}`);
//         if (n % i === 0) {
//             return console.log(`${n} is NOT a prime number.`)
//         }
//     }
//     return console.log(`${n} is a prime number.`);
// }

// isPrime(291)

// OPTIMAL METHOD
function isPrime(n) {
    if (n<2) return console.log(`${n} is NOT a prime number.`);
    if (n===2) return console.log(`${n} is a prime number.`);
    if (n===3) return console.log(`${n} is a prime number.`);
    let sqRoot = Math.sqrt(n);
    for (let i=2; i<=sqRoot; i++) {
        console.log(`half = ${sqRoot}`)
        console.log(`i = ${i}`);
        if (n % i === 0) {
            return console.log(`${n} is NOT a prime number.`)
        }
    }
    return console.log(`${n} is a prime number.`);
}
// Big(O) = O(sqrt(n))

// isPrime(293)

// 7:50 mon nov28 2022
// POWER OF TWO

// APPROACH 1
// function isPowerOfTwo(n) {
//     for(let i = 0; i <= Math.pow(2, 1/i); i++) {
//         if ((2 ** i)/2 === 0) {
//             return true;
//         }
//     }
// }

/*
n = 2**i
log2(n) = log2(2**i)
i = log2(n) 
Math.pow(2, 1/i)
*/

// APPROACH 2
// function isPowerOfTwo(n) {
//     const log = Math.log2(n)
//     console.log(log)
//     if (Number.isInteger(log)) return true;
//     return false;
// }

// console.log(isPowerOfTwo(0))

// APPROACH 3
// function isPowerOfTwo(n) {
//     if (n < 1) return false;
//     for(let i = 0; i <=n; i++) {
//         console.log(`n = ${n}`);
//         console.log(`i = ${i}`);
//         console.log(`Math.log2(n) = ${Math.log2(n)}`);
//         console.log(`2**${i} = ${2**i}`)
//         if (2**i === n) {
//             return true;
//         }
//         if (2**i > n) {
//             return false;
//         }
//     }
// }

// console.log(isPowerOfTwo(5))
// console.log(2**1)

// APPROACH 4
// function isPowerOfTwo(n) {
//     if (Math.log2(n) % 1 === 0) return true;
//     return false;
// }
// console.log(isPowerOfTwo(5))
/*
n = 2**i
i = log2(n)
if i % 1 === 0: return true
return false
*/

// // APPROACH 5
// function isPowerOfTwo(n) {
//     console.log('initial n = ' + n)
//     if (n < 1) return false;
//     if (n === 1) return true;
//     for(let i = 0; i < n/2; i++) {
//         n = n/2;
//         console.log('n = ' + n);
//         if (n % 1 !== 0) return false;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(3));

// // APPROACH 6
// function isPowerOfTwo(n) {
//     console.log('initial n = ' + n)
//     if (n < 1) return false;
//     if (n === 1) return true;
//     for(let i = 0; i < n/2; i++) {
//         n = n/2;
//         console.log('n = ' + n);
//         if (!Number.isInteger(n)) return false;
//     }
//     return true;
// }
// console.log(isPowerOfTwo(4));

// // APPROACH 7
// function isPowerOfTwo(n) {
//     if (n < 1) return false;
//     while (n > 1) {
//         if (n % 2 !== 0) return false;
//         n = n/2;
//     }
//     return true;
// }
/*
Big O is linear i.e. O(n) (WRONG)
Big O is actually logarithmic (ie O(logn)), because n is always reduced by half, for every iteration.
*/
// console.log(isPowerOfTwo(4));

// // APPROACH 8
function isPowerOfTwo(n) {
    if(!n) return `Please enter an argument.`
    if (n < 1) return false;
    return (n & (n - 1)) === 0
}
// console.log(isPowerOfTwo())