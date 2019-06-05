function scramble(str1, str2) {
    //code me
    if(str1.length > 0 && str2.length > 0 && /^[a-z]+$/.test(str1) && /^[a-z]+$/.test(str2)){
      for(let i = 0; i <str2.length; i++){
        if(!str1.includes(str2[i])){
          return false;
          }
        }
        return true;
      }
    return false;
   }