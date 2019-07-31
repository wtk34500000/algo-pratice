var findDisappearedNumbers = function(nums) {
    let arr =[]
    for(let i =0; i < nums.length; i++){
        arr[i]=i+1
    }
    
    nums.forEach(n => arr[n-1] = -1)
    return arr.filter(n => n > 0)
};