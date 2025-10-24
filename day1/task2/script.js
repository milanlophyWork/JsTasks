// PATTERN

function word(text){
    let pattern = ''

    for(let i = 0; i< text.length; i++){
        pattern = pattern + text[i]
        console.log(pattern)
    }
    let pattern2 = ''
    for(let i=1; i<text.length;i++){
        pattern2 = text.slice(i)
        console.log(pattern2)
    }
}
word('CAT')