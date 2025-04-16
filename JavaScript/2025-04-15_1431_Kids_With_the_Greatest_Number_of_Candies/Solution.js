/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var m = Math.max(...candies);
    var res = [];
    candies.forEach(function(number){
        res.push(number + extraCandies - m >= 0);
    });
    return res;
};