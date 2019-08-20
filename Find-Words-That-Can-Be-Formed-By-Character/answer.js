var countCharacters = function (words, chars) {
    let charsBucket = new Array(26).fill(0)
    for (let i = 0; i < chars.length; i++) {
        let idx = chars[i].charCodeAt() - 97
        charsBucket[idx]++
    }


    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let isTrue = true;
        let temp = [...charsBucket];

        for (let j = 0; j < words[i].length; j++) {
            if (--temp[words[i][j].charCodeAt() - 97] < 0) {
                isTrue = false
            }
        }

        if (isTrue) {
            count += words[i].length
        }
    }
    return count
};