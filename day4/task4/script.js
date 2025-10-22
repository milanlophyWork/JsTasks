function pattern(str){
    let first = ''
    for(let i=0;i<str.length;i++){
        first += str[i]
        console.log(first)
    }
    let second = ''
    for(let i=1;i<str.length;i++){
        second = str.slice(i)
        console.log(second)
    }
}
pattern('cat')