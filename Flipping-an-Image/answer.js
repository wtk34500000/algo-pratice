var flipAndInvertImage = function(A) {
    let newArr=[]
    for(let i =0; i < A.length; i++){
        A[i].reverse();
    }
    for(let i =0; i< A.length; i++){
        newArr.push(A[i].map(k =>{
          if(k ===0){
            return 1
          }else{
            return 0
          }
        } ))
    }
    return newArr
};