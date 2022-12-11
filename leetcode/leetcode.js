// 1. TWO SUM

// ATTEMPT 1
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
//  var twoSum = function(nums, target) {
//   console.log(nums, target)
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.lenth; j++) {
//         console.log(i, j);
//           if (nums[i] + nums[j] === target) {
//               return [i, j]
//           }
//       }
//   }
// };
// console.log(twoSum([2,7,11,15], 9))

// ATTEMPT 2
function testing(n) {
  for(let i = 0; i < 6; i++) {
    for(let j = i + 1; j < 6; j++) {
      console.log(i, j);
    }
  }
}
// testing(10)

// ATTEMPT 3
// function twoSum(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       console.log(`${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]}`);
//     }
//   }
// }
// twoSum([1, 2, 3, 4, 5])

// // ATTEMPT 4
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       console.log(`${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]} and target = ${target}`);
//     }
//   }
// }
// twoSum([1, 2, 3, 4, 5], 26)

// ATTEMPT 5
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]}`)
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}
console.log(twoSum([1, 2, 3, 4, 5], 3))
// console.log(twoSum([2, 7, 11, 15], 9))