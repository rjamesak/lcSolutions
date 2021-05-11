// https://leetcode.com/problems/reorder-data-in-log-files/

/* You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.

*/

/**
 * param {string[]} logs
 * return {string[]}
 */
var reorderLogFiles = function (logs) {
    // determine which is let log and which is dig log
    // parse the string into key/value array
    let letterLogs = []
    let digitLogs = []

    logs.forEach(log => {
        let tuple = log.split(' ')
        tuple = [tuple[0], tuple.slice(1).join(' ')]
        // if value is digit
        if (isNaN(tuple[1][0])) {
            letterLogs.push(tuple)
        }
        else {
            digitLogs.push(tuple)
        }
    })
    letterLogs.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1
        }
        else if (a[1] > b[1]) {
            return 1
        }
        else {
            // check sorting of key
            if (a[0] < b[0]) {
                return -1
            }
            else if (a[0] > b[0]) {
                return 1
            }
            else {
                return 0
            }
            return 0
        }
    })
    // combine back into string array
    let retArr = []
    letterLogs.forEach(tuple => {
        retArr.push(tuple.join(' '))
    })
    digitLogs.forEach(tuple => {
        retArr.push(tuple.join(' '))
    })
    return retArr


}