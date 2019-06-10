const orderedCount = (text) => {
    return [...new Set(text)].map(k => [k, text.split(k).length-1])
}