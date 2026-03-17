// problem: lc 11. Container With Most Water

const height = [1,8,6,2,5,4,8,3,7]
// op: 49

// brute force
// function maxArea(height) {
//     let maxArea = 0;
//     const n = height.length;

//     for(let i=0; i<n; i++) {
//         for(let j=i+1; j<n; j++) {
//             let width = (j-i)
//             let minArea = Math.min(height[i], height[j]) * width;
//             maxArea = Math.max(maxArea, minArea)
//         }
//     }

//     return maxArea
// }

// optimal
function maxArea(height) {
    let maxArea = 0;
    let left = 0, right = height.length - 1;

    while(left < right) {
        let h = Math.min(height[left], height[right])
        let w = right - left
        maxArea = Math.max(h* w, maxArea)
        if(height[left] < height[right]) {
            left++;
        }else  {
            right--;
        }
    }

    return maxArea
}

console.log(maxArea(height))


// console.log("hi")