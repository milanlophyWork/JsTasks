const myPromise = new Promise((res)=>{
    res(5)
})
.then(value => value * 2)
.then(value => value + 10)
.then(value => console.log(value))