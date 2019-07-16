var isMonotonic = function(A) {
    return monotoneInc(A) || monotoneDec(A)
};

const monotoneInc = (A) =>{
    for(let i=0; i<A.length-1; i++){
        if(A[i] > A[i+1]){
            return false
        }
    }
    return true
}

const monotoneDec = (A) =>{
    for(let i=0; i<A.length-1; i++){
        if(A[i] < A[i+1]){
            return false
        }
    }
    return true
}