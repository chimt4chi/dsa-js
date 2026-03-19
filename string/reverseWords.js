// Problem: LC - 151. Reverse Words in a String
// Diff = Med

function reverseWords(s) {
const cleaned = s.trim().replace(/\s+/g, " ");
const res = cleaned.split(" ").reverse().join(" ").trim();
return res;
};