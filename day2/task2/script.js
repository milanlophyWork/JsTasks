function wordCount(text){
    let count = 0
    let words = text.split(' ')
    words.forEach(element => {
        // console.log(element, count)
        count++
    });
    return count
}
console.log(wordCount('Hello world'))
console.log(wordCount('This is a sample sentence.'))
console.log(wordCount('Programming is fun!'))
