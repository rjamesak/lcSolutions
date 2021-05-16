// https://leetcode.com/problems/add-binary/

// Given two binary strings a and b, return their sum as a binary string.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // carry variable
    let carry = 0
    let answer = ""
    // compare the strings from the ends
    aptr = a.length - 1
    bptr = b.length - 1
    while (aptr >= 0 || bptr >= 0 || carry) {
        // 0 + 1 = 1
        // 1 + 1 = 0 w/carry
        // 1 + 1 + carry = 1 w/carry
        // account for only remaining carry
        if (aptr < 0 && bptr < 0 && carry) {
            answer = ('1' + answer)
            carry = 0
        }
        // account for empty a string
        else if (aptr < 0 && !carry) {
            answer = (b[bptr] + answer)
        }
        else if (aptr < 0 && carry) {
            let sum = _addBin(b[bptr], carry)
            if (sum == 1) {
                answer = ('1' + answer)
                carry = 0
            }
            else if (sum == 2) {
                // append 1 to front, keep carry
                answer = ('0' + answer)
            }
        }
        // account for empty b string
        else if (bptr < 0 && !carry) {
            answer = a[aptr] + answer
        }
        else if (bptr < 0 && carry) {
            let sum = _addBin(a[aptr], carry)
            if (sum == 1) {
                answer = ('1' + answer)
                carry = 0
            }
            else if (sum == 2) {
                answer = ('0' + answer)
            }
        }
        else {
            // add each ptr
            let sum = _addBin(a[aptr], b[bptr]) + carry
            if (sum == 1) {
                answer = ('1' + answer)
                carry = 0
            }
            else if (sum == 2) {
                answer = ('0' + answer)
                carry = 1
            }
            else if (sum == 3) {
                answer = ('1' + answer)
                carry = 1
            }
            else {
                answer = ('0' + answer)
                carry = 0
            }
        } // end else
        aptr--
        bptr--
    } // end while
    return answer

};

function _addBin(a, b) {
    return parseInt(a) + parseInt(b)
}