function sortArr(arr){
    let minValues = []

    function findMin(arr){
        let min = arr[0]
        let minIndex        

        for(let i=0; i<arr.length; i++){
            if(arr[i] < min){
                min= arr[i]
                minIndex = arr.indexOf(min)
            }
        }

        arr.splice(minIndex, 1) // removing min value from original array
        minValues.push(min)
     
        return arr.length === 0 ? minValues : findMin(arr)
    }
    return findMin(arr)
}
console.log(sortArr([5,4,3,2,1]))