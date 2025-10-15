// BUILT-IN METHODS

function myMap(arr, callback){
    const newArray = []

    arr.forEach(item=> {
        newArray.push(callback(item))
    })
    console.log(newArray)
}
myMap([1,2,3],mul)

function MyFilter(arr, callback){
    const newArray = []

    arr.forEach(item => {
        if(callback(item) === true) newArray.push(item)
    })
    console.log(newArray)
}
MyFilter(arr, isEven)

function myReduce(arr, callback, initialVal){
    let acc = initialVal 
    
    arr.forEach((item) => {
        acc = callback(acc, item)
    })
    console.log(acc)
}

myReduce(arr, max, arr[0])
myReduce([1,2,3], sum, 0)


const arr = [1,2,3,14,5,6,7,8]
function mul(a){
    return a*2
}
function isEven(a){
    if(a%2 === 0) return true
    else return false
}
function sum(a,b){
    return a+b
}
function max(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
}