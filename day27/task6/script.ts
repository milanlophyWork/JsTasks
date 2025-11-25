export function removeFalsy(arr: unknown[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let newArr: unknown[] = []
    arr.forEach(item => {
        if(item) newArr.push(item)
    })
    return newArr
}
// console.log(removeFalsy([1,0,2,'',3, undefined, 4]))