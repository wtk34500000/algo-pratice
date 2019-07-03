var countPrimes = function(n) {
    let count = 0;
    for(let i = 2; i < n; i++){
        if(isPrime(i)){
          count++;
        }
    }
    return count;
};


function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}