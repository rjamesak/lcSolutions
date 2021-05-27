// coding along with https://www.youtube.com/watch?v=oBt53YbR9Kk

// dynamic programming

// you are a traveller on a 2D grid. You begin at the top left
// and goal is to travel to bottom right. May only move down
// or right.
// In how many ways can you travel to the goal on a grid with 
// dimensions m * n?

function travelGrid(r, c, memo = {}) {
    // memoized solution
    let key = r + ',' + c
    let oppoKey = c + ',' + r
    if(r === 0 || c === 0) {
        return 0
    }
    else if (r === 1 || c === 1) {
        return 1
    }
    else if (key in memo) return memo[key]
    else if (oppoKey in memo) return memo[oppoKey]
    else {
        memo[key] = travelGrid(r-1, c, memo) + travelGrid(r, c-1, memo)
    }
    return memo[key]
}
