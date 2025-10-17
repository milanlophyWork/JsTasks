function toSnakeCase(text){
    let newText = ''
    for(char of text) {
        // newText += char.split(pattern,1)
        newText += char.replace(/[A-Z]/,`_${char.toLowerCase()}`)
    }
    console.log(newText)
}
toSnakeCase('myFunction')