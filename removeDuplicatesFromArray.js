/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 2) return nums
    // two pointers, start at 0 and 1
    // left pointer holds the pos of the next val
    // right ptr looks for the next value
    let left = 0
    let right = 1
    while (right < nums.length) {
        if (nums[right] > nums[left]) {
            // inc left and place right into left
            left++
            nums[left] = nums[right]
            right++
        }
        else {
            right++
        }
    }
    return left + 1

};