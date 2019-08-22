var findWords = function (words) {
    let row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    let row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    let row3 = ["Z", "X", "C", "V", "B", "N", "M"]
    let result = []
    for (let i = 0; i < words.length; i++) {
        let arr = words[i].split("")
        if (arr.every(char => row1.includes(char.toUpperCase()))) {
            result.push(arr.join(""))
        }
        if (arr.every(char => row2.includes(char.toUpperCase()))) {
            result.push(arr.join(""))

        }
        if (arr.every(char => row3.includes(char.toUpperCase()))) {
            result.push(arr.join(""))
        }
    }
    return result
};