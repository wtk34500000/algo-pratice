/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let start = A[0].split("")

    for (let i = 1; i < A.length; i++) {
        let chars = A[i].split("")
        start = start.filter(sChar => {
            let idx = chars.indexOf(sChar)
            if (idx > -1) {
                chars[idx] = "found"
                return true
            } else {
                return false
            }
        })
    }
    return start
};