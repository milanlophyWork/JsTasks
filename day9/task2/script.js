
const myPromise2 = new Promise(()=> {
    setTimeout(()=>{
        throw new Error('Network error')
    },1000)
   
}).catch(err=> console.log(err))
