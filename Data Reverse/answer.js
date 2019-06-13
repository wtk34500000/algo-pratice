function dataReverse(data) {
    // Your code here
    let revStr=''
    let str=''
    for(let i=0; i<=data.length; i++){
        
       if(i % 8 === 0){
           revStr=str+revStr
           str=''
       }
        str=str+data[i]   
    }
    return revStr.split('').map(k => parseInt(k))
  }