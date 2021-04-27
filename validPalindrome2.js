//https://leetcode.com/problems/valid-palindrome-ii/

// seemed easy at first, I had trouble implementing this.
// Kind of a complicated solution

/**
 * param {string} s
 * return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0
    let right = s.length - 1

    if (s.length < 3) {
        return true
    }

    let deletes = 0
    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
            //continue;
        }
        // not equal
        // else if not match, compare next characters (right - 1, left + 1)
        // else if left + 1 == right AND deletes == 0, delete left (mark a delete and inc ptr)
        // not match but both "nexts" match, look at next-next
        else if (s[left + 1] === s[right] && s[right - 1] === s[left] && !deletes) {
            if (left + 2 < right) {
                if (s[left + 2] === s[right - 1]) {
                    deletes++
                    left += 3
                    right -= 2
                } // end if
                else if (s[right - 2] === s[left + 1] && right - 2 >= left) {
                    deletes++
                    right -= 3
                    left += 2
                } // end else if
                else { return false; }
            }
            else {
                deletes++
                left += 2
                right--
            }
        }
        else if (s[left + 1] === s[right] && !deletes) {
            deletes++
            left += 2
            right--
        }
        // if right - 1 = left AND deletes = 0, delete right (note a deletion and dec ptr)
        else if (s[left] === s[right - 1] && !deletes) {
            deletes++
            right -= 2
            left++
        }
        // no match, or "next" doesn't match, or match with >0 deletes
        else {
            return false
        }
    } // end while
    return deletes < 2

};