
function perfectSqr(num){
    for(let i=2; i<=num/2; i++){
        if(i*i === num){
            console.log(i)
            return
        }
    }
    console.log('not a perfect square')
}

perfectSqr(16)
perfectSqr(10)
perfectSqr(25)