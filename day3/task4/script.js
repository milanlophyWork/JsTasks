function arrangeArray(arr1, arr2, position){
    if(arr1[position]){
        let temp = arr1[position]
        arr1.splice(position+1,0,temp)
    }
    arr1[position] = arr2
    console.log(arr1.flat())
}
arrangeArray([1, 2, 3], [4, 5, 6], 0)