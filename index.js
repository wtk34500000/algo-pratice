// Usually when you buy something, you're asked whether your credit card number, phone number or 
// answer to your most secret question is still correct. However, since someone could look over your 
// shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify(cc) {
    const n=cc.length;
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


// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a, b) {
    return (a+b).toString(2);
 }