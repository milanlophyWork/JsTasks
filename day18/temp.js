function raiseTo(n){
    return n**n
}

function findSum(arr){
    return arr.reduce((acc,curr)=> acc + curr)
}

function waterFall(arr, ...x){
    // console.log(typeof arr[0], arr[0](...x))
    let value
    let first = arr[arr.length-1](...x)
    if(arr.length === 1) return first
    else{
        
        for(let i=arr.length-1; i>=0; i--){
            // for(let j=i-1; j>= 0; j--){
                
                if(arr[i-1]) {
                    console.log(i, arr[i-1](first))
                    value = arr[i-1](first)
                    first = value
                }
            // }
        }
    }
    return value
}

// console.log(waterFall([(x)=> 2+x,(x)=> x*x,(x,y)=> x+y],2,3))

function pipe(...fns){
    let value
    
    return function composition(...x){
        let first = fns[0](...x)

        for(let i=0; i<fns.length; i++){                
                if(fns[i+1]) {
                    value = fns[i+1](first)
                    first = value
                }
        }
        return value
    }
}
const add5 = x=> x+5
const multiply3 = x=> x*3
const piped = pipe(add5, multiply3)
console.log(piped(5))