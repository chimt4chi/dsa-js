let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// [1,2,2,3,5,6]

// brute force

function merge(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m + n -1;

    while(j >= 0) {
        if(i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--
        }else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    return nums1
}

console.log(merge(nums1, m, nums2, n))

// optimal
// function merge(nums1, m, nums2, n) {
    
//     const op = [];
//     let left = 0, right = 0;

//     while(left < m && right < n) {
//         if(nums1[left] < nums2[right]) {
//             op.push(nums1[left])
//             left++
//         } else {
//             op.push(nums2[right]);
//             right++;
//         }
//     }

//     while(left < m) {

//             op.push(nums1[left])
//             left++;
//     }

//     while(right < n) {

//             op.push(nums2[right])
//             right++;
//     }

//     return op;
// };

// console.log(merge(nums1, m, nums2, n))
