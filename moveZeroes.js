// https://leetcode.com/problems/move-zeroes/

/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

/**
 * param {number[]} nums
 * return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // step through the array
    // note the pos of encountered 0, append to arr
    let zeroPos = []
    nums.forEach((num, idx) => {
        // when zero found, push idx to array
        if (num === 0) {
            zeroPos.push(num)
        }

    });
    // when non-zero encountered, swap with lowest zero

};