/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums2Index = 0
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[nums2Index++]
    }
    nums1.sort((a,b) => {
        return a - b
    })
};
