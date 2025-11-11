function findSquare(n:number){
    return n**n
}

function findSum(arr:number[]){
    return arr.reduce((acc,curr)=> acc + curr)
}

function seriesSum(n:number){
    let newArr = []
    for(let i=1; i<=n; i++){
        newArr.push(findSquare(i))
    }
    let lastTen = findSum(newArr).toString().slice(-10)
    return lastTen

}
console.log(seriesSum(10))
console.log(seriesSum(1000))