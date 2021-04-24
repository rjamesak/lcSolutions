// LC 14 - Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

/**
 * param {string[]} strs
 * return {string}
 */
var longestCommonPrefix = function (strs) {
    // look at each word in the list at the same time
    let letterCount = Infinity // hold the number of prefix matches
    // loop the words and compare the letters from one word to the next
    for (let i = 0; i < strs.length - 1; i++) {
        let matches = 0
        for (let j = 0; j < Math.min(strs[i].length, strs[i + 1].length); j++) {
            // compare the letters from one word to the next
            if (strs[i][j] === strs[i + 1][j]) {
                // mark how many match
                matches++
            }
            else { break; }
        } // end loop2
        letterCount = Math.min(matches, letterCount)
        // short circuit if no matches, return empty string
        if (!letterCount) {
            return ""
        }

    } // end loop1

    // populate and return the prefix
    return strs[0].slice(0, letterCount)
};