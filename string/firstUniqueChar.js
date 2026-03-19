// LC: 387. First Non-Repeating Character

const s = "leetcode";

// brute force -> compare each char with others if found return first.

// function firstUniqChar(s) {
//     for(let i=0; i<s.length; i++) {
//         for(let j=i+1; j<s.length; j++) {
//             if(s[i] !== s[j]) return i;
//         }
//     }

//     return -1;
// }


function firstUniqChar(s) {
    const map = new Map();

    for(let i=0; i<s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for(let i=0; i<s.length; i++) {
        if(map.get(s[i]) === 1) return i;
    }

    return -1;
}

console.log(firstUniqChar(s))