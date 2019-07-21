var rotateString = function(A, B) {
    return A.length === B.length && A.concat(A).includes(B)
};