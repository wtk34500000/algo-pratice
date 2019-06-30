var repeatedNTimes = function(A) {
    if(A.length % 2 === 0){
        
        for(let i =0; i<A.length; i++){
            if(A.filter(k=> A[i]===k).length > 1){
                return A[i]
            }
        }
    }
    return false;
};