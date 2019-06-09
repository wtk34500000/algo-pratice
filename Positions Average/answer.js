const pos_average = (input) => {
    let count =0;
    const strArr = input.split(",")
    const n = strArr.length
    if(n >= 2){
        const totalSub=(n * (n-1)) / 2
        for(let i = 0; i < n-1; i++){
            for(let j=i; j< n-1; j++){
                count+=compareStr(strArr[i].trim(), strArr[j+1].trim())
            }
        }
        return  count/totalSub;
    }
    return "Invalid input"
}

const compareStr = (s1, s2) => {
    let count =0
    for(let i =0; i<s1.length; i++){
        if(s1[i]===s2[i]){
            count =count+1
        }
    }
    return count
}