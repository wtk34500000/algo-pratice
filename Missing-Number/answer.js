var missingNumber = function(nums) {
    let sum=0
    sum=nums.reduce((a, b)=> a+b)
    
    return nums.length * (nums.length+1)/2 - sum
};