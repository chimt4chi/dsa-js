const chars = ["a","a","b","b","c","c","c"];

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let n = chars.length;
    let i = 0;  // pointer for current position
    let write = 0;  // pointer to write compressed characters

    while (i < n) {
        let char = chars[i];
        let count = 1;

        // Count the number of occurrences of the same character
        while (i + 1 < n && chars[i] === chars[i + 1]) {
            i++;
            count++;
        }

        // Write the character to the result array
        chars[write++] = char;

        // If the count is greater than 1, write the count as well
        if (count > 1) {
            const countStr = count.toString();
            for (let j = 0; j < countStr.length; j++) {
                chars[write++] = countStr[j];
            }
        }

        i++;  // Move to the next character
    }

    return write;  // The length of the compressed array
};


console.log(compress(chars))