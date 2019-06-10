function oddBall(arr){
    //..
    for(let i =0; i<arr.length; i++){
        if(arr[i]==='odd'){
          if(arr.includes(i)){
            return true
          }
        }
    }
    return false;
}


// const oddBall= (arr)=>{
//     return arr.includes(arr.indexOf('odd'))
// }