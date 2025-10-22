function flattening(arr){
    let newArr = []
    function flatten(arr){
        for(item of arr){
            if(Array.isArray(item)){
                flatten(item)
            }else{
                newArr.push(item)
            }
        }
        return newArr
    }
    return flatten(arr)
}
console.log(flattening([1,[2,3,[4],5]]))