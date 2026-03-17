// problem -> 53. maximum subarray
const nums = [-2,1,-3,4,-1,2,1,-5,4] // 6
// const nums = [5,4,-1,7,8]; // 23
// const nums = [-1,-2,-3,-4,0,-2,1]

// brute force
// function maxSubArray(arr) {
//   let maxSum = -Infinity;
  
//   for(let i=0; i<arr.length; i++) {
//     let currSum = 0;
//     for(let j=i; j<arr.length; j++) {
//       currSum += arr[j];
//       // maxSum = Math.max(maxSum, currSum)
//       if(currSum > maxSum) {
//         maxSum = currSum
//       }
//     }
//   }
//   return maxSum
// }

// optimal
function maxSubArray(arr) {
    let maxSum = -Infinity;
    let currSum = -Infinity;

    for(let curr of arr) {
        currSum = Math.max(curr, curr + currSum)
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum;
}

console.log(maxSubArray(nums))