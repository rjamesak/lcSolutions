// 

// leetcode solution is simpler and is run with a for loop
// instead of a while

/**
 * param {number[]} nums1
 * param {number} m
 * param {number[]} nums2
 * param {number} n
 * return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // NOTE: merge arr2 into arr1
    // work from end of each array
    let put = m + n - 1
    // dec m and n to use as indexes for the 2 arrays
    // first pointer
    if (m > 0) {
        m--
    }
    else {
        // edge case, nothing in array1, only in array2
        if (n > 0) {
            n--
            while (put >= 0) {
                nums1[put] = nums2[n]
                put--
                n--
            }
        }
    }
    // get second pointer
    if (n > 0) {
        n--
    }
    else { return; }

    // compare n1 to n2, then dec as necessary
    while (put >= 0) {
        if (n < 0) {
            return;
        }
        // loop each array and compare numbers
        // if n2 > n1, put at end of n1, dec n and put
        else if (m < 0 || nums2[n] >= nums1[m]) {
            nums1[put] = nums2[n]
            n--
            put--
        }
        else if (nums1[m] > nums2[n]) {
            nums1[put] = nums1[m]
            put--
            m--
        }


    }


};
