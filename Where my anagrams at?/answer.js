function anagrams(word, words) {
    let sortedword=word.split("").sort().join("")
    return words.filter(word => word.split("").sort().join("")===sortedword)
}