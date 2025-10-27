function findMissing(arr){
    arr.sort((a,b)=> a-b)
    for(let i=0; i< arr.length-1; i++){
        if(arr[i+1]!==arr[i]+1){
            return arr[i]+1
        }
    }
    return 'sorted'
}
console.log(findMissing([1,2,3,5,6]))
console.log(findMissing([2,3,4,5,6]))
console.log(findMissing([10,11,13,14,15]))