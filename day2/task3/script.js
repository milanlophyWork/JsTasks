function evenArray(arr){
    let even = []
    arr.forEach(item => {
        if(item%2 === 0){
            even.push(item)
        }
    })
    return even
}

console.log(evenArray([1,2,3,4,5,6]))
console.log(evenArray([7,8,9,10,11,12]))
console.log(evenArray([2,4,6,8,10]))
