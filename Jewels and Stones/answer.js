var numJewelsInStones = function(J, S) {
    let result =0;
    for(let i = 0; i < J.length; i++){
       result+=S.split(J[i]).length-1
    }
    
    return result;
};