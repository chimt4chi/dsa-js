// Problem: LC - 49. Group Anagrams

const strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// function groupAnagrams(strs) {
//     const n = strs.length;
//     const res = [];
//     const visited = Array(n).fill(0);

//     for(let i=0; i<n; i++) {
//         if(visited[i]) continue
//         let grouped = [strs[i]]
//         visited[i] = 1;
//         let sorted1 = strs[i].split("").sort().join("");

//         for(let j=i+1; j<n; j++) {
//             if(!visited[j]) {
//                 let sorted2 = strs[j].split().sort().join("");
//                 if(sorted1 === sorted2) {
//                     grouped.push(strs[j])
//                     visited[j] = 1;
//                 }
//             }
//         }
//         res.push(grouped)
//         console.log(res)
//     }

//     return res;
// };


function groupAnagrams(strs) {
    const map = new Map();

    for(let word of strs) {
        const sign = word.split("").sort().join("")
        if(!map.has(sign)) map.set(sign, []);
        map.get(sign).push(word)
    }

    return Array.from(map.values())
}

console.log(groupAnagrams(strs))