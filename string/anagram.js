// brute force soln
// function isAnagram(s, t) {
//   if(s.length !== t.length) return false;
  
//   let one = s.split("").sort().join(""); 
//   let two = t.split("").sort().join("");
  
//   return one === two;
// };

const s = "anagram", t = "nagaram"

// console.log(isAnagram(s, t))

// optimal soln

function isAnagram(s, t) {
  if(s.length !== t.length) return false;
  
  const map = new Map();
  
  for(let char of s) {
    map.set(char, (map.get(char) || 0) +1);
  }
  
  for(let char of t) {
    if(!map.has(char)) return false;
    map.set(char, map.get(char) - 1)
    if(map.length < 0) return false;
  }
  
  return true;
};

console.log(isAnagram(s, t))