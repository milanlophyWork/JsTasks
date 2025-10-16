
function reverseStr(str){
    let reverse = ''
    for(char of str){
        reverse = char + reverse
    }
    const ordered = reverse.split(' ').reverse()
    return ordered
}
console.log(reverseStr('Hello world'))
console.log(reverseStr('Programmers are awesome'))
console.log(reverseStr('Programming is fun'))