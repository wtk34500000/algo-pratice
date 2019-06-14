function groupByCommas(n) {
   const size=n.toString().split("").length
   const nArr=n.toString().split("")
   const newArr=[]
    if(n>=0 && n<1000000000){
      if(size<4){
        return n.toString()
      }
      else{
        let count =0
        for(let i=size-1; i>=0; i--){
          if(count % 3 ===0){
            newArr.push(",")
          }
          newArr.push(nArr[i])
          count++;
        }
        return newArr.reverse().join("").slice(0,-1)
      }
    }
  }


  //another solution.......
  function groupByCommas(n) {
      return n.toLocaleString()
  }