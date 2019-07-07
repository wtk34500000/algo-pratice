var reverseWords = function(s) {
    const revStr=s.split(" ");
    return revStr.map(str => str.split("").reverse().join("")).join(" ")
};