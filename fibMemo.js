// not worked for an LC solution
// studying DP and working on first memoization solution

// return value of nth fib 

// this is a memoized version of the fibonacci function
// NOTE: add the memo to the calling arguments
function fib(n, memo = {}) {
    // memoize it
    
    // if 1 or 2, return 1
    if (n <= 2) {
        return 1
    }
    // if it's in the memo, return the value
    else if (n in memo) {
        return memo[n]
    }
    else {
        // pass the memo into the recursive calls
        memo[n] = fib(n-1, memo) + fib(n-2, memo)
    }
    return memo[n]
}

let start = parseInt(Date.now())
let result = fib(100)
let finish = parseInt(Date.now())
console.log('result:', result, 'time:', finish - start)