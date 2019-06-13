const input =[1,2,1,3,4,2,3,1,4,1,1,2,3]

const findOddOccur =(arr)=>{
  const result=[]
  const newSet = [...new Set(arr)]
  newSet.map(k => [k, arr.filter(n => k === n).length]).forEach(num => num[1]%2 ===1? result.push(num[0]): null)
  
  return result
}

const findOddOccur =(arr)=>{
   arr.sort();
   let count=1
   for(let i =0; i< arr.length-1; i++){
       if(arr[i] === arr[i+1]){
           count+=1
       }else{
           if(count % 2 ===1){
               return arr[i]
           }
           count=1
       }
   }
   return "Not Found"
}