// problem - 238. Product of Array Except Self

const nums = [1,2,3,4];
// const nums = [-1,1,0,-3,3]
// op: [24,12,8,6]

// brute force
// function productExceptSelf(nums) {
//     const res = [];

//     for(let i=0; i<nums.length; i++) {
//         let prod = 1;
//         for(let j=0; j<nums.length; j++) {
//             if(i === j) continue
//             prod *= nums[j];
//         }
//         res.push(prod);
//     }
//     return res;
// };

// optimal

function productExceptSelf(nums) {
    const n = nums.length;
    const prefix = Array(n).fill(1)
    const suffix = Array(n).fill(1)
    const res = Array(n)

    for(let i=1; i<n; i++) {
        prefix[i] = prefix[i-1] * nums[i-1]
    }

    for(let j=n-2; j>=0; j--) {
        suffix[j] = suffix[j+1] * nums[j+1]
    }

    for(let i=0; i<n; i++) {
        res[i] = suffix[i] * prefix[i]
    }

    return res;
};


console.log(productExceptSelf(nums))