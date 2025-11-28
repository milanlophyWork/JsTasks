export function findPrime(n: number){
    if(typeof n !== 'number' || isNaN(n) || n<=0 || n === Infinity) return 'invalid input'
    
    let numbers: number[] = []
    for(let i=2; i<=n*5 ;i++){
        numbers.push(i)
    }
    
    for(let i=2; i<=n*5; i++){
        for(let j=0; j<numbers.length; j++){
            for(let k=j+1; k<numbers.length; k++){
                if(numbers[j] * i === numbers[k]) numbers.splice(k,1)
            }
        }
    }

    numbers.splice(n, numbers.length - n)
    return numbers
}
// console.log(findPrime(13))