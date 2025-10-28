function lengthyWord(text){
    if(typeof text !== 'string' || !text.trim()) return 'invalid input'
    const words = text.replaceAll(/[,!:;?.]/g,'').split(' ')

    let wordlength = 0
    let lengthyWord

    for(let i =1; i< words.length; i++){
       
        if(words[i].length > wordlength ){
            wordlength = words[i].length
            lengthyWord = words[i]
        }
    }
    return lengthyWord
}

console.log(lengthyWord('hello world of programming'))
console.log(lengthyWord('The quick brown fox jumps over the lazy dog'))
console.log(lengthyWord('I love coding'))