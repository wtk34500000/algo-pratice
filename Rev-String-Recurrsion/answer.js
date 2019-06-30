const revString=(str)=>{
    if(str===""){
        return "";
    }
    return revString(str.substr(1)+ str.charAt(0))
}