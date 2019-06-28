var sortArrayByParity = function(A) {
    const even = A.filter(ele => ele % 2 === 0)
    const odd = A.filter(ele => ele % 2 === 1)
    return even.concat(odd);
};