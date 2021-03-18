// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that 
// he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
    let returnArr = [];
    // get max from array
    let maxCandies = Math.max(...candies);
    // for each, check if num + extras >= max
    candies.forEach(kidCandies => {
        if (kidCandies + extraCandies >= maxCandies) {
            returnArr.push(true);
        }
        else {
            returnArr.push(false);
        }
    })
    return returnArr;
};