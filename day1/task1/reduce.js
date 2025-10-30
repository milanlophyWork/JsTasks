const arr = [1,2,3,14,5,6,7,8]

function max(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
}

function myReduce(arr, callback, initialVal){
    let acc = initialVal 
    
    arr.forEach((item) => {
        acc = callback(acc, item)
    })
    return acc
}

console.log(myReduce(arr,max, arr[0]))
console.log(myReduce([1,2,3], (a,b)=> a+b, 0))
