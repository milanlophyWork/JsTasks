export function toFahrenheit(C: number){ 
    if(typeof C !== 'number' || isNaN(C)) return 'invalid input'
    const F =( 9/5 * C) + 32
    return F
}
console.log(toFahrenheit(0))