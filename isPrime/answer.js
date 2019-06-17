const isPrime= (n) =>{
    if(n >=0 ){
      if(n === 1 || n ===0){
        return false
      }
      if(n===2){
        return true
      }
      for(let i=2; i<n/2; i++){
        if(n % i === 0){
          return false
        }
      }
      return true
    }
    return "Invalid input"
  }
  
  const checkPrime = (n) => {
    let result=[]
    if(n >= 0){
      for(let i =2; i<n; i++){
        if(isPrime(i)){
          result.push(i)
        }
      }
      return result
    }
    return "Invalid input"
  }