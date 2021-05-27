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

// recursive https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/

var reverseString = function (s) {
    // divide and conquer
    // swap the first and last
    swap(s, 0, s.length - 1)

    function swap(s, front, back) {
        if (front >= back) {
            return
        }
        else {
            [s[front], s[back]] = [s[back], s[front]]
            return swap(s, front + 1, back - 1)
        }

    }
}


