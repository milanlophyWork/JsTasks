function interpretSum(arr){
    let str = toString(arr)
    const newArr = toNum(str)
    return newArr.reduce((acc,curr)=> acc+curr)
}
console.log(interpretSum([[1,2,3], [0,7]]))


function toString(arr){
    let str = []
    for(item of arr){
        if(Array){
            // console.log(item)
            let numTxt = `${item[0]}`
            str.push(item.reduce((acc,curr)=> numTxt+=curr)) // numTxt to make string
        }
    }
    return str
}
// console.log(toString([[1,2,3], [0,7]]))


function toNum(arr){
    let num = []
    arr.forEach(item=> {
        num.push(Number(item))
    })  

    return num
}
// console.log(toNum(['123','07']))
