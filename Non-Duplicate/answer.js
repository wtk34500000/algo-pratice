const nonDup =(arr)=>{
    for(let i =0; i<arr.length; i++){
      if(arr.join(",").split(arr[i]).length-1 === 1){
        return arr[i]
      }
    }
    return false;
  }