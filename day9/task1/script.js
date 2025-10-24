const myPromise1 = new Promise((res)=>{
    setTimeout(()=>{
        res('Data Loaded')
    },2000)
})
myPromise1.then((value)=> console.log(value))