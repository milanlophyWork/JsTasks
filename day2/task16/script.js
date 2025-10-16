
function sort(arr){
    let length = 0
    let arr1 = []
    let arr2 = []

    for(let i =0; i< arr.length; i++){
        if(arr[i].length >= length){
            arr1.push(arr[i])
            length = arr[i].length
        }else if (arr[i].length < length){
            arr2.push(arr[i])
        }
    }
   
    if(arr2.length >= 1 && arr1[0].length > arr2[0].length   ){
        console.log(arr2.concat(arr1))
    }else{
        console.log(arr1.concat(arr2))
    }
}

sort(['open','source','programming','is','fun'])
sort(["hello", "world"])
sort(["cat", "dog", "elephant", "tiger"])
