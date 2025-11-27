
export function selectionSort(arr: number[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let start:number = 0
    let end:number = arr.length-1
 
    while(start !== end){
        let min:number = Infinity
        for(let i=start; i<= end; i++){
            if(typeof arr[i] !== 'number' || isNaN(arr[i])) return 'invalid input'

            if(arr[i]<min){
                min = arr[i]
            }
        }

        let index:number = arr.lastIndexOf(min)
        let temp:number = arr[start]
        arr[start] = min
        arr[index] = temp
        start++
    }
    return arr
}
// console.log(selectionSort([2,1,4,3]))