export function hornersPoly(coefficients:number[], x:number){
    if(!Array.isArray(coefficients) || coefficients.length === 0 || typeof x !== 'number' || isNaN(x)) return 'invalid input'
    let temp:number = x * coefficients[0]
    let sum:number = 0
    for(let i=1; i<coefficients.length; i++){
        sum = temp + coefficients[i]
        temp = sum * x
    }
    return sum
}
// console.log(hornersPoly([2,-6,2,-1], 3)) // f(x) = 2x^3-6x^2+2x-1 // f(3) = 5
// console.log(hornersPoly([2,-4,0,0,12], 2)) // f(x) = 2x^4-4x^3+12 // f(2) = 12