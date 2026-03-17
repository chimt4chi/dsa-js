// problem: LC: 189. Rotate Array

const nums = [1,2,3,4,5,6,7], k = 3
// op: [5,6,7,1,2,3,4]


// function rotate(arr, k) {
//     const n = arr.length;
//     k = k% n;

//     function reverse(nums, i, j) {
//         while(i < j) {
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//             i++, j--;
            
//         }
//     }

//     reverse(nums, 0, n-1)
//     reverse(nums, 0, k-1)
//     reverse(nums, k, n-1)

//     return arr;
// }

function rotate(arr, k) {
    const n = arr.length;
    k = k % n;

    const res = new Array(n)
    for(let i=0; i<n; i++) {
        res[(i + k) % n] = arr[i];
    }

    for(let i=0; i<n; i++) {
        nums[i] = res[i];
    }

    return arr;
}

console.log(rotate(nums, k))