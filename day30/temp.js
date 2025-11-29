function findGcd(a,b){
    let largest, smallest
    if(a > b) {
        largest = a
        smallest = b
    }
    else {
        largest = b
        smallest = a
    }

    let remainder = largest % smallest
    while(remainder !== 0){
        let result =  smallest % remainder
        smallest = remainder
        remainder = result
    }
    return smallest
}
// console.log(findGcd(252,105)) // 21

function findPrime(n){
    let numbers = []
    for(let i=2; i<=n*5 ;i++){
        numbers.push(i)
    }
    
    for(let i=2; i<n*5; i++){
        for(let j=0; j<numbers.length; j++){
            for(k=j+1; k<numbers.length; k++){
                if(numbers[j] * i === numbers[k]) numbers.splice(k,1)
            }
        }
    }

    numbers.splice(n, numbers.length - n)
    return numbers
}
// console.log(findPrime(25))

function poly(degree, coefficients, x){
    // console.log('Coefficients must be from higher order to lower order')
    if(coefficients.length !== degree + 1) return 'Enter correct number of coefficients'
    let sum = 0
    let temp
    for(let i=0; i<coefficients.length; i++){
        temp = coefficients[i] * (x ** degree)
        sum += temp
        degree--
    }
    return sum
}

// console.log(poly(3, [2,-6,2,-1], 3)) // f(x) = 2x^3 -6x^2 + 2x -1 // x=3

function hornersPoly(coefficients, x){
    let temp = x * coefficients[0]
    let sum = 0
    for(let i=1; i<coefficients.length; i++){
        sum = temp + coefficients[i]
        temp = sum * x
    }
    console.log(sum)
}
// hornersPoly([2,-6,2,-1], 3) // f(x) = 2x^3-6x^2+2x-1 // f(3) = 5
// hornersPoly([2,-4,0,0,12], 2) // f(x) = 2x^4-4x^3+12 // f(2) = 12

function secondsToText(sec){
    let hours = Math.floor(sec/3600)
    let minutes = Math.floor((sec%3600)/60)
    let seconds = sec%60

    let parts = []
    if(hours >0 ) parts.push(hours + ' hour ' + (hours >1 ? 's':''))
        if(minutes > 0) parts.push(minutes + ' minute ' + (minutes > 1 ? 's' : ''))
            if(seconds > 0 || parts.length=== 0) parts.push(seconds + ' second' + (seconds > 1? 's' :''))
    console.log(parts.join(''))
}
secondsToText(3661)

function findLongWord(text){
    let words= text.split(/\s+/)
    let max = Math.max(...words.map(w=> w.length))
    // let max = Math.max(...length)
    console.log(max)
    return words.filter(w=> w.length === max)
}
console.log(findLongWord('the fox brown jump the fence of Steve'))