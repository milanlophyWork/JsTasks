
export function checkSort(arr:number[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let ascend:number[] = [...arr].sort((a,b) => a-b)
    let descend:number[] = [...ascend].reverse()
    let flag:number|null = null
    
    for(let i=0 ;i<arr.length; i++){
        if(arr[i] !== ascend[i]){ 
            if(arr[i] !== descend[i]) return 'unsorted'
                else flag = 1
        }else flag = 0
    }
    if(flag === 0) return 'ascending'
    else return 'descending'
}

// console.log(checkSort([4,3,2,1]))
