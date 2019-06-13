const selectionSort=(arr)=>{
    const n= arr.length
    for(let i=0; i< n-1; i++){
      let minIdx=i
      for(let j=i+1; j< n; j++){
        if(arr[j]< arr[minIdx]){
          minIdx=j
        }
      }
      const temp=arr[minIdx]
      arr[minIdx]=arr[i]
      arr[i]=temp
    }
    return arr
  }