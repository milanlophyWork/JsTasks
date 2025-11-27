
function linearSearch(num: number, arr: number[]){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num) return `element ${num} found at index ${i}`
    }
    return 'element not found'
}
console.log(linearSearch(3, [1,4,3,2,5]))