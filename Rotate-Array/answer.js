var rotate = function(nums, k) {
    return nums.slice(-k).concat(nums.slice(0, -k))
};