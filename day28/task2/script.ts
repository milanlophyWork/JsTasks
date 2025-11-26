export function rotateByK(arr: unknown[], k: number){
    if(!Array.isArray(arr) || arr.length === 0 || k >= arr.length || k <= 0) return 'invalid input'

    let newArr = []
    for(let i=0; i< k; i++){
        let ele = arr.pop()
        newArr.unshift(ele)
    }
    return [...newArr,...arr]
}
console.log(rotateByK([1,2,3,4,5], 2))