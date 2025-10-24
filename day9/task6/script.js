async function myPromise(){
    const p1 = await new Promise ((res)=> {
        setTimeout(()=>{
            res('Login Successful')
        },3000)
    })
    console.log(p1)
}
myPromise()