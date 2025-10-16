function lengthyWord(text){
    const words = text.split(' ')

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
lengthyWord(['cat','dog','elephant','tiger'])
lengthyWord(['apple','banana','orange'])
lengthyWord(['programming', 'is', 'fun'])