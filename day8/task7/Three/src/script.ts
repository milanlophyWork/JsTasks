function SumOfArray(arr:number[][]){
   let newArr:number[] = []
    arr.forEach(item=>{
        let numTxt = String(item).replaceAll(',','')
        newArr.push(Number(numTxt))
    })
    return newArr.reduce((acc,curr)=> acc+curr)
}
console.log(SumOfArray([[1,2,3], [0,7]]))

function sum(...n:number[]){
    return n.reduce((acc,curr)=> acc+curr)
}
console.log(sum(1,2,3,4,5))