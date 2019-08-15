/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let sum = 0;
    let result = ''

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            if (sum > 0) {
                result += S[i]
            }
            sum++;
        } else {
            sum--;
            if (sum > 0) {
                result += S[i]
            }
        }
    }

    return result

};