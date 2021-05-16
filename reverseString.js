// https://leetcode.com/problems/reverse-string/


/**
 * param {character[]} s
 * return {void} Do not return anything, modify s in-place instead.
 */

// first attempt
var reverseString = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < Math.floor(s.length / 2)) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
}

// using destructuring
var reverseString = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < Math.floor(s.length / 2)) {
        [s[left], s[right] = s[right], s[left]]
        left++
        right--
    }
}


