function maxProduct(arr){
    const sorted = arr.sort((a,b) => b-a)
    const largest = sorted.slice(0,3)
    let sum = 1
    for(digit of largest){
        sum*=digit
    }
    console.log(largest,sum)
}
maxProduct([1,2,3,4])
maxProduct([-1,-2,-3,-4,-5])
maxProduct([-4,-3,-2,-1,0])