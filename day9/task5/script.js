function promise1(){
    return new Promise(res => res('Promise 1'))
}

function promise2(){
    return new Promise(res=> res('Promise 2'))
}

function promise3(){
    return new Promise(res => res('Promise 3'))
}

async function display(){
    const result = await Promise.all([
        promise1(),
        promise2(),
        promise3()
    ]).then(val => console.log(val))
}

display()