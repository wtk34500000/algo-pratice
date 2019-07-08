// var singleNumber = function(nums) {
//     for(let i =0; i< nums.length; i++){
//         if(nums.filter(k=> k ===nums[i]).length === 1){
//             return nums[i]
//         }
//     }
// };

var singleNumber = function(nums) {
    return nums.reduce((a, b)=> a^b) 
 };