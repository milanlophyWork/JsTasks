
function myMap(arr,callBack){
    let newArr = []
    arr.forEach(item=> newArr.push(callBack(item)))
    return newArr
}
function cb1(a){
    return a*2
}
console.log(myMap([1,2,3,4],cb1))


function myFilter(arr,callBack){
    let newArr = []
    arr.forEach(item => {
        if(callBack(item) === true) newArr.push(item)
    })
    return newArr
}
function isEven(a){
    if(a%2 === 0){
        return true
    }
}
console.log(myFilter([1,2,3,4],isEven))


function myReduce(arr, callBack,initialVal=null){
    let acc = initialVal === null ? arr[0] : initialVal

    arr.forEach((item)=> {
        acc = callBack(acc, item)
    })
    console.log(acc)
}
function cb3(a,b){
    return a+b
}
myReduce([1,2,3,4],cb3,0)