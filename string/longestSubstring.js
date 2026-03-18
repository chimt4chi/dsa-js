// function lengthOfLongestSubstring(s) {
//   let n = s.length;
//   let maxLen = 0;
  
//   for(let i=0; i<n; i++) {
//     for(let j=i; j<n; j++) {
//       let isDuplicate = false;
//       for(let k=i; k<j; k++) {
//         if(s[j] === s[k]) {
//           isDuplicate = true
//           break;
//         }
//       }
//       if(isDuplicate) break;
//       maxLen = Math.max(maxLen, j-i + 1);
//     }
//   }
//   return maxLen;
// }

const s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s))

// optimal soln

function lengthOfLongestSubstring(s) {
    const n = s.length;
    let maxLen = 0;

    for(let i=0; i<n; i++) {
        let currLen = 0;
        const set = new Set();
        for(let j=i; j<n; j++) {
            if(set.has(s[j])) break;
            currLen++;
            set.add(s[j])
        }

        maxLen = Math.max(maxLen, currLen)
    }

    return maxLen;
}

console.log(lengthOfLongestSubstring(s))