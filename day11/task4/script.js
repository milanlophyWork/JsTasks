function combineObject(obj1, obj2){
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    let newObj = {}    

    keys1.forEach(key => {
        newObj[key] = obj1[key]
    })
    keys2.forEach(key => {
        newObj[key] = obj2[key]
    })
    console.log(newObj)
}
combineObject({a:1, b:2}, {b: 3, c:4})