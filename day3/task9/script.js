function removeDuplicate(text){
    const mySet = new Set()
    for(char of text){
        mySet.add(char)
    }
    console.log(...mySet)
}

removeDuplicate('apple')