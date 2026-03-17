// problem: lc: 268. Find the Missing Number

const nums = [3,0,1]

// Output: 2

// brute force soln
// function missingNumber(nums){
    
//     for(let i=0; i<nums.length; i++) {
//         let found = false;
//         for(let j=0; j<nums.length; j++) {
//             if(nums[j] === i) {
//                 found = true;
//                 break;
//             }
//         }
//         if(!found) return i;
//     }
// };


// optimal soln

function missingNumber(nums) {
    nums.sort((a,b) => a-b)
    const set = new Set(nums)

    for(let i=0; i<nums.length; i++) {
        if(!set.has(i)) return i;
    }
}

console.log(missingNumber(nums))