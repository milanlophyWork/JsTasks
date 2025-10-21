// Rearrange numbers by parity
function rearranging(arr){
    let even=[]
    let odd = []
    arr.map(item=> {
        item%2===0 ? even.push(item): odd.push(item)
    })
    console.log([even,odd].flat())
}
rearranging([3,2,4,1,5,8])