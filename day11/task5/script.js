function objectEquality(obj1, obj2){
    let flag = 0
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    
    if(keys1.length !== keys2.length){
        return 'Not Equal'
    }else{
        keys1.forEach(key => {
            if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
                flag = 1
            }
        })
        if(flag === 1) return 'Not Equal'
        else return 'Equal'
    }   
}
console.log(objectEquality({a: 1, b: 2}, {b: 3, c: 4}))
