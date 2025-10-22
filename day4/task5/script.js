function toKebabCase(str){
    let kebab = ''
    for(char of str){
        kebab += char.replace(/[A-Z]/, `-${char.toLowerCase()}`)
    }
    console.log(kebab)
}
toKebabCase('myFunction')