// problem - 238. Product of Array Except Self

// const nums = [1,2,3,4];
const nums = [-1,1,0,-3,3]
// op: [24,12,8,6]

function productExceptSelf(nums) {
    const res = [];

    for(let i=0; i<nums.length; i++) {
        let prod = 1;
        for(let j=0; j<nums.length; j++) {
            if(i === j) continue
            prod *= nums[j];
        }
        res.push(prod);
    }
    return res;
};


console.log(productExceptSelf(nums))