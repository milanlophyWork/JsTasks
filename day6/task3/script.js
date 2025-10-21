//Find missing number without includes() and indexOf()
function findMissing(arr){
    let flag = 0
    for(let i=0; i<arr.length;i++){
        if(arr[i-1] && arr[i]-arr[i-1]>2){
            return 'invalid array'
        }
        else if(arr[i-1] && arr[i]-arr[i-1]===2){
            return arr[i]-1
        }else{
            flag = 1
        }
    }
    if(flag===1)return 'No missing number'
}
console.log(findMissing([1,2,3,5,6]))