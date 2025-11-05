function setWidth(arr, maxWidth){
    let strGroup = []
    let sum = 0
    let str = []
    
    for(let char of arr.join(' ')){
        if(sum < maxWidth) {
            sum += 1
            str.push(char)
            if(char === arr[arr.length-1].slice(-1)) strGroup.push(str.join(''))
        }
        else{
            strGroup.push(str.join(''))
            str = []
            sum = 0
        }
    }
    // arr.forEach(str=> {
    //     if(sum <= maxWidth) {
    //         sum += str.length
            
    //     }
    //     else {
    //         newStr.push([str])
    //         sum = 0
    //     }
    //     strLength.push(str.length)
    // })
    console.log(strGroup, sum)
}

setWidth(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16)

/*
function setWidth(arr, maxWidth){
    let strGroup = []
    let sum = 0
    let strings = []
    let strLength = []
    let newStr = []

    arr.forEach(str=> {
        strings.push(str)
        // if(sum <= maxWidth) {
        //     sum += str.length
        //     console.log(str)
        // }
        // else {
        //     strGroup.push([str])
        //     sum = 0
        // }
        strLength.push(str.length)
    })
   
    for(let char of arr.join(' ')){
        sum+=1
        // if()
        newStr.push(char)
    }
    console.log(strLength, strings, newStr, strGroup)
}*/