// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/


// Given a string s, find the length of the longest substring without repeating characters.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // track each letter in obj with index val
    // when repeat found, jump to one ahead of the last/latest occurrence
    // track the size along the way in maxTracker
    // size = rightIndex - leftIndex + 1
    // reset size on jump => curr size - 
    if (s.length === 1) {
        return 1
    }
    let left = 0
    let right = 1
    let maxTracker = 0
    let letterTracker = {}
    // push right and left letters to letter tracker
    letterTracker[s[left]] = left
    while (right < s.length) {
        if (s[right] in letterTracker) {
            // jump left to letterTracker[right] + 1, don't jump backwards
            if (letterTracker[s[right]] >= left) {
                left = letterTracker[s[right]] + 1
            }
            // update the new pos of the letter
            letterTracker[s[right]] = right
            // update the max
            maxTracker = Math.max(maxTracker, (right - left + 1))
            right++
        }
        else {
            letterTracker[s[right]] = right
            maxTracker = Math.max(maxTracker, (right - left + 1))
            right++
        }
    } // end while
    return maxTracker
    
};