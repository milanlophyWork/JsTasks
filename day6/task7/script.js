// Flatten nested arrays
function wrap(arr){
    let newArr=[]
    
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

console.log(wrap([1,[2,[3,[4]],5]]))
console.log(wrap([2,[4,5]]))