var fib = function(N) {
    if(N >=0 && N<=30){
        if(N === 0){
            return 0;
        }else if(N ===1){
            return 1;
        }
        return fib(N-1)+fib(N-2)
    } 
};