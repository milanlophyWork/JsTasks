function findMissing(arr){
    
    let flag 
    for(let i=0; i< arr.length; i++){

        if(arr.length === 1 ){
            return 'sorted'
        }else{
            if(arr[i-1]< arr[i]){
                if(arr[i] - arr[i-1] > 2){
                    flag = 0
                }
                else if(arr[i] - arr[i-1] === 1){
                    flag = 1
                }
                else if(arr[i] - arr[i-1] !== 1){
                    return arr[i] - 1
                }
            }else{
                flag = 0
            }
        }
    }
       
    if(flag === 0){
        return 'Array not sorted'
    }else{
        return 'sorted'
    }
}
console.log(findMissing([1,2,3,5,6]))
console.log(findMissing([2,3,4,5,6]))
console.log(findMissing([10,11,13,14,15]))