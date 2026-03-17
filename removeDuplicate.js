// function removeDuplicates(nums) {
//     let k = 1;
    
//     for(let i=1; i<nums.length; i++) {
//         if(nums[i] !== nums[i-1]) {
//             nums[k++] = nums[i];
//         }
//     }

//     console.log(nums)

//     return k;
// };

function removeDuplicates(nums) {

    let counter = 1;
    for(let i=0; i<nums.length; i++) {

        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] != nums[j]) {
                nums[counter++] = nums[j];
            }
        }
    }

    return counter;
}

removeDuplicates([1,2,2,3,3,4])