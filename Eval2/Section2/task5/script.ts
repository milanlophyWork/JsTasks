
async function fetchNum(n: number){
    let num:number = Math.floor((Math.random() * n) + 1)
    return num
}
// fetchNum(20)

async function getValueGreaterThanTen<T>(fetchFn: (...args: number[])=> Promise<T>){
    return function running(n: number){
        let value = fetchFn(n)
        console.log(value)
    }    
}
let myFn = getValueGreaterThanTen(fetchNum)
console.log(myFn.then((val)=> val(20)))