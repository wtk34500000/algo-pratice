var reverseOnlyLetters = function(S) {
    
    const letter=[]
    let result=""
    for(let i =0; i<S.length; i ++){
        if(/^[a-zA-Z]+$/.test(S[i])){
            letter.unshift(S[i])
        }
    }
    
    for(let i =0; i<S.length; i ++){
        if(/^[a-zA-Z]+$/.test(S[i])){
           result=result+letter.shift()
        }else{
            result+=S[i]
        }
    }

    return result;
};