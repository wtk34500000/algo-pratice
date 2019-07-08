var findComplement = function(num) {
    const arrNum=num.toString(2).split("")
    let result=""
    for(let i=0; i<arrNum.length; i++){
        if(arrNum[i]==="0"){
            result+="1"
        }else{
            result+="0"
        }
    }
    return parseInt(result, 2)
};