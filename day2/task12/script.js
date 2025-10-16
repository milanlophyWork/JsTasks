
function maxProduct(arr){
    const sorted = arr.sort((a,b)=> b-a )
    console.log(sorted)

    const result = sorted.slice(0,3)
    console.log(result)
    return result.reduce((acc,curr)=> acc*curr)
    
}

console.log(maxProduct([-4,-3,-2,-1,0]))
console.log(maxProduct([1,2,3,4]))
console.log(maxProduct([-1,-2,-3,-4,-5]))