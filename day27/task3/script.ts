export function findArmstrong(num: number){
    if(typeof num !== 'number' || isNaN(num) || num < 0) return 'invalid input'

    let numStr : string = String(num)
    let count: number = numStr.length

    let sum = 0
    for(let n of numStr){
        sum += n**count
    }

    if(Number(sum) === num) return true
        else return false
}
// console.log(findArmstrong(153))