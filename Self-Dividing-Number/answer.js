var selfDividingNumbers = function(left, right) {
    const result = [];
    if(left >=1 && right <=10000){
        for(let i =left; i<=right; i++){
            if(isSelfDividing(i)){
                result.push(i)
            }
        }
        return result
    }
};

const isSelfDividing = (num) =>{
  let strNum=num.toString()
  let newArr=strNum.split("")
  for(let i=0; i< newArr.length; i++){
    if(parseInt(num) % parseInt(newArr[i])!==0){
      return false
    }
  }
  return true
}