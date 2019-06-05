function maskify(cc) {
    const n = cc.length;
    if(n > 4){
        let newStr="";
        for(let i = 0; i< n-4; i++){
            newStr+="#";
        }
        return newStr+cc.substring(n-4, n);
    }
    else{
        return cc;
    }
}