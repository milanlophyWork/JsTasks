// Flatten nested arrays
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
console.log(flatten([1,[2,[3,[4]],5]]))