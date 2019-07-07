var sumEvenAfterQueries = function(A, queries) {
    const result=[]
    for(let i =0; i < queries.length; i++){
        let idx=queries[i][1]
        let value =queries[i][0]
        let sum=0;
        A[idx]=A[idx]+value
        A.forEach(k =>{
            if(k % 2 ===0){
                sum+=k
            }
        })
        result.push(sum)
        sum=0
    }
    return result
};