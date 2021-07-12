// got help from this video
// https://www.youtube.com/watch?v=QRa9ZVGMWlY


// recursive exploration
// https://leetcode.com/explore/learn/card/recursion-i/253/conclusion/1675/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    // check this video for help
    // https://www.youtube.com/watch?v=QRa9ZVGMWlY
    // find parent
    // parent is on row n-1, ceil(k/2)
    // base case: if n == 1 || k == 1, return 0
    let kIsOdd = k % 2
    if (n === 1 || k === 1) return 0
    let parent = kthGrammar(n - 1, Math.ceil(k / 2))
    if (parent === 1) {
        if (kIsOdd) return 1
        else return 0
    }
    else {
        if (kIsOdd) return 0
        else return 1
    }


};