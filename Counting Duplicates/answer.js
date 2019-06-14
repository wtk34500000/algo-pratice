function duplicateCount(text){
    //...
    if(text.length ===0){return 0}
    else{
      const newSet = [...new Set(text)]
      const dupArr=[]
      for(let i=0; i<newSet.length;i++){
        
          if(text.split("").filter(k => k.toUpperCase() === newSet[i].toUpperCase()).length >=2){
            dupArr.push(newSet[i])
          }
      }
      return [...new Set(dupArr.join("").toLowerCase())].length
    }
  }