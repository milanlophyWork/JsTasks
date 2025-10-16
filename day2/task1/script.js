function isPrime(num){

    let prime
    if(num === 2){
        prime = num
    }else if(num > 2){
        for(let i=2; i<num; i++){
            if(num % i === 0){
                return false 
            }
        }
        prime = num
    }else{
        return false
    }

    if(prime){
        return true
    }
    
}

console.log(isPrime(7),isPrime(6))

