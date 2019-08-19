/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityII = function (A) {
    const size = A.length
    let even = []
    let odd = []
    let result = []

    for (let i = 0; i < size; i++) {
        if (A[i] % 2 === 0) {
            even.push(A[i])
        } else {
            odd.push(A[i])
        }
    }

    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            result.push(even.pop())
        } else {
            result.push(odd.pop())
        }
    }

    return result
};

var sortArrayByParityII = function (A) {
    let even = A.filter((e) => e % 2 === 0)
    let odd = A.filter((e) => e % 2 === 1)
    let result = A.map((e, idx) => idx % 2 === 0 ? even.pop() : odd.pop())
    return result
};