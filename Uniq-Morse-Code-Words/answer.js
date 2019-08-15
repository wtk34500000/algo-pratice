/**
 * @param {string[]} words
 * @return {number}
 */

let codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

let getIdx = char => char.charCodeAt(char) - 'a'.charCodeAt(char)

var uniqueMorseRepresentations = function (words) {
    let result = words.map(word => word.split("").map(char => codes[getIdx(char)]).join(""))
    return [...new Set(result)].length
};