function list(names){
    //your code here
    if(names.length > 1){
      let str=[]
      for(let i =0; i< names.length - 1; i++){
      str.push(names[i].name)
      }
      return str.join(', ')+" & "+names[names.length-1].name
    }
    return names[0]? names[0].name: ''
}