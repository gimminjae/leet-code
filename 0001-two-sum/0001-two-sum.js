/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let startIndex = 0
    let endIndex = nums.length - 1
    
    for (let i = 0; i <= endIndex; i++) {
        for (let j = 0; j <= endIndex; j++) {
            if (i === j) continue
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};