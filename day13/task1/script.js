function counter(x){
    let val = x
    return function add(){
        return val++
    }
}

let call1 = counter(1)
console.log(call1())
console.log(call1())


let call2 = counter(2)
console.log(call2())
console.log(call2())