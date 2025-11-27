export function insertionSort(arr:number[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    for(let i=0 ;i< arr.length; i++){
        if(typeof arr[i] !== 'number' || isNaN(arr[i])) return 'invalid input'
        
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]> arr[j]){
                let item = arr.splice(j,1)
                arr.splice(i, 0, item[0])
            }
        }
    }
    return arr
}
console.log(insertionSort([2,1,4,1,3]))