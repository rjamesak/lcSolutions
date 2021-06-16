// from recursive exploration
// memoized

// https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/3234/

//Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// input: a rowo on the triangle
// output: the values in that row

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // input: a row of the triangle
    // output: the values of that row
    // Notes:
    // a cell's value = (r-1, c-1) + (r-1, c)
    // base case: if c == 0 or c == r, return 1
    // loop the row and call helper on the cells
    let rowVals = []
    for (let i = 0; i <= rowIndex; i++) {
        let cellValue = helper(rowIndex, i)
        rowVals.push(cellValue)
    }
    return rowVals


    // helper function to calc values of row, col
function helper(row, col, memo={}) {
    // optimize: we know that if c <= r/2, then
    // val(r, c) == val(r, c-r)
    let rcString = row +',' + col
    // if row - col > row / 2
    let symmetricalSide = ""
    if (row - col > Math.floor(row/2)) {
        symmetricalSide = row + ',' + (row - col)
    }
    if (col === 0 || col === row) {
        return 1
    }
    else if (rcString in memo){
        return memo[rcString]
    }
    else if (symmetricalSide !== "" && symmetricalSide in memo) {
        return memo[symmetricalSide]
    }
    else{
        // fill the memo
        memo[rcString] = helper(row - 1, col - 1, memo) + helper(row - 1, col, memo)
        // fill the value of the oppo side of triangle
        if(symmetricalSide !== "") {
            memo[symmetricalSide] = memo[rcString]
        }

        return memo[rcString]
    }
}
    
