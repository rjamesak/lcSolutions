// https://leetcode.com/problems/richest-customer-wealth/

/**
 * param {number[][]} accounts
 * return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    // find the array with the max sum
    // loop arr of accounts, sum each account
    accounts.forEach((accounts, customer) => {
        let total = accounts.reduce((accumulator, val) => {
            return accumulator + val;
        })
        // track max value
        max = Math.max(total, max)
    })
    return max;

};