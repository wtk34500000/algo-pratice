var isPalindrome = function(s) {
    return s.split(/[ .:;?!~@#,`"--&|()<>{}\[\]\r\n/\\]+/).map(k => k.split("").reverse().join("")).reverse().join("").toUpperCase() === s.split(/[ .:;@#?!~,`"--&|()<>{}\[\]\r\n/\\]+/).join("").toUpperCase()
};