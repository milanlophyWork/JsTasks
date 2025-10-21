// custom filter function
function myFilter(arr,cb){
    let newArr =[]
    arr.forEach((item)=> {
        if(cb(item) === true) newArr.push(item)
    })
    console.log(newArr)
}

function greaterThanTen(a){
    if(a>10){
        return true
    }
}
myFilter([1,54,2,17,13,10],greaterThanTen)