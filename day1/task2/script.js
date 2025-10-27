// PATTERN

function word(text){
    let pattern = ''

    for(let i = 0; i< text.length; i++){
        pattern = pattern + text[i]
        console.log(pattern)
    }
    let pattern2 = ''
    for(let i=1; i<text.length;i++){
        pattern2 = text.slice(i) // slice(1) : AT because slicing starts at 1, C =>0 A => 1 goes till end as no end index specified
        console.log(pattern2)
    }
}
word('CAT')