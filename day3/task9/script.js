function removeDuplicate(text){
    const mySet = new Set()
    for(char of text){
        mySet.add(char)
    }
    console.log(...mySet)
}

// removeDuplicate('apple')

function numTxt(num){
    let str = String(num)
    let count = 0
    for(char of str){
        count++
        // console.log(char*Number(count+'00'))
    }
    
    console.log(count)
}
numTxt(723)