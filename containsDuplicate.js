// https://leetcode.com/problems/contains-duplicate/

/**
 *  param {number[]} nums
 * return {boolean}
 */
var containsDuplicate = function (nums) {
    // uses a set to check for duplicates
    // push array into set, then compare the lengths
    let myset = new Set(nums);
    return myset.size !== nums.length;
};