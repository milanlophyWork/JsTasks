const myPromise = new Promise((res)=>{
    setTimeout(()=>{
        res('Success')
    },2000)
}).finally(()=> console.log('Promise Completed'))

myPromise.then((value)=> console.log(value))
