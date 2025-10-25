function deepClone(obj){
    let newObj = structuredClone(obj)
    return newObj
}
let obj1 = {
    1: 'item1',
    2: {
        2.1: 'item 2.1',
        2.2: 'item 2.2'
    },
    3: 'item 3'
}
console.log(deepClone(obj1), obj1)