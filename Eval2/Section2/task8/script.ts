export function isEven(num: number){
    if(typeof num !== 'number' || isNaN(num)) return 'invalid input'
    
    if(num === 0) return 'even'
    let newNum = Number(num.toString().replace('.',''))
    if(Math.round(newNum/2) === newNum/2) return 'even'
    else return 'odd'
}
// console.log(isEven(14.2))
