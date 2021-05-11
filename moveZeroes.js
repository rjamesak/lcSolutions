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
    for (let i = 0; i < nums.length; i++) {
        // when zero found, push idx to array
        if (nums[i] === 0) {
            zeroPos.push(i)
        }
        else {
            // when non-zero encountered, swap with lowest zero
            // if a zero has been encountered
            if (zeroPos.length > 0) {
                let zeroIdx = zeroPos.shift()
                // put cur val in zero pos
                nums[zeroIdx] = nums[i]
                // push new val of zero to arr
                zeroPos.push(i)
                // make cur idx = 0
                nums[i] = 0

            }

        }

    };

};