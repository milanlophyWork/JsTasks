function subArray(arr, size){
    if(!Array.isArray(arr) || arr.length === 0 || size > arr.length) return 'invalid input'

    let newArr = []
    let arrItems = []
    let items = Math.floor(arr.length / size)
    let index = items * size - 1
    let remaining = arr.length % size

    for(let i=0; i<=index; i++){
        arrItems.push(arr[i])
        if((i+1) % size === 0) {
            newArr.push([...arrItems])
            arrItems = []
        }
        
    }
    if(remaining !== 0) newArr.push(arr.slice(-remaining))
    
    // console.log(remaining, arr.slice(-remaining))
    return newArr
}
console.log(subArray([1,2,3,4,5], 1))
console.log(subArray([1,9,6,3,2], 3))
