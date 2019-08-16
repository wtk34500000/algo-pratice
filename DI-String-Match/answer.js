/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let n = S.length
    let newArr = []
    let low = 0
    let high = n
    for (let i = 0; i <= n; i++) {
        if (S[i] === "I") {
            newArr.push(low++)
        } else {
            newArr.push(high--)
        }
    }

    return newArr;
};