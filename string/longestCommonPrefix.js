// Problem: 14. Longest Common Prefix.

const strs = ["flower","flow","flight"]
// op - "fl"


// brute force
// function longestCommonPrefix(strs) {
//     let res = "";
//     for(let i=0; i<strs[0].length; i++) {
//         let char = strs[0][i];

//         for(let j=1; j<strs.length; j++) {
//             if(i >= strs[j].length || strs[j][i] !== char) return res;
//         }
//         res += char;
//     }

//     return res;
// };



// optimal
function longestCommonPrefix(strs) {
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];

    let i=0;

    while(i < first.length && first[i] === last[i]) i++;

    return first.substring(0, i)
}


console.log(longestCommonPrefix(strs))