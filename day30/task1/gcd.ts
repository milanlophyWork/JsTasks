export function findGcd(a: number, b:number){
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || a===0 ||b===0) return 'invalid input'

    let largest:number, smallest:number
    if(a > b) {
        largest = a
        smallest = b
    }
    else {
        largest = b
        smallest = a
    }

    let remainder:number = largest % smallest
    while(remainder !== 0){
        let result:number =  smallest % remainder
        smallest = remainder
        remainder = result
    }
    return smallest
}
// console.log(findGcd(252,105)) // 21
// console.log(findGcd(36,60)) // 12