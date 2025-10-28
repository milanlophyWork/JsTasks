
//task3
function objInvert(obj){
    let newObj = {}
    const newValues = Object.keys(obj)
    const newKeys = Object.values(obj)
    for(let i= 0; i<newKeys.length;i++){
        newObj[newKeys[i]] = newValues[i]
    }
    console.log(newObj)
}
objInvert({a:1,b:2})