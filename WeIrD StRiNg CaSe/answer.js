function toWeirdCase(string){
    //TODO
    const splitStr=string.split(" ")
    let arrStr=[]
      
    splitStr.forEach(str =>{
        let newStr=""
      for(let i =0; i< str.length; i++){
        if(i % 2 === 0){
         newStr+=str[i].toUpperCase()      
        }else{
          newStr+=str[i].toLowerCase() 
        }
      }
      arrStr.push(newStr)
    })
    
     return arrStr.join(" ")
  }