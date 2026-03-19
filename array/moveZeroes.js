// problem: lc 283. Move Zeroes

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// approach -> we need two pointer one that will track the index of zero and one that will check for non-zero, we will keep swapping the both elements 

const nums = [0,1,0,3,12]

function swap(arr, i, j) {
  return [arr[i], arr[j]] = [arr[j], arr[i]];
}
// function moveZeroes(nums) {
//     for(let i=0;i<nums.length; i++) {
//         let zeroInd = 0;
//         if(nums[i] === 0) continue
//         for(let j=i; j<nums.length; j++) {
//             if(nums[j] !== 0) {
//                 // swap(nums, zeroInd, i)
//                 let temp = nums[zeroInd];
//                 nums[zeroInd] = nums[j];
//                 nums[j] = temp;
//                 zeroInd++;
//                 i++;
//             }   
//         }
//     }

//     return nums;
// };


function moveZeroes(nums) {
    const n = nums.length
    let index = 0;
    for(let i=0; i<n; i++) {
        if(nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }

    while(index < n) {
        nums[index++] = 0
    }

    return nums;
}
console.log(moveZeroes(nums))