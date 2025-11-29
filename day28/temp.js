function toFahrenheit(C){ 
    const F =( 9/5 * C) + 32
    return `${F} deg F`
}
// console.log(toFahrenheit(0))

function rotateByK(arr, k){
    if(k >= arr.length) return 'invalid input'
    let newArr = []
    for(let i=0; i< k; i++){
        let ele = arr.pop()
        newArr.unshift(ele)
    }
    return [...newArr,...arr]
}
// console.log(rotateByK([1,2,3,4,5], 5))

function toSingleObj(arr){
    let myObj = {}
    arr.forEach(obj=>{
        myObj[obj.key] = obj.value
    })
    return myObj
}
// console.log(toSingleObj([{key:'a', value: 1}, {key: 'b', value: 2}]))

function convertSec(sec){
    let obj = {0.5: 30, 0.25: 15, 0.75: 45}

    let hours = sec/3600
    for(let key of  Object.keys(obj)){
        if(hours - Math.floor(hours) === Number(key)) return `${Math.floor(hours)} hours ${obj[key]} minutes`
        else return `${Math.floor(hours)} hours ${hours - Math.floor(hours)} minutes`
    }
}
// console.log(convertSec(9000))

function sumOfUniqueNum(arr){
    let myObj = {}
    arr.forEach(num =>{
        if(!myObj[num]) myObj[num] = 0

        myObj[num]++
    })

    let sum = 0
    Object.keys(myObj).forEach(key=> {
        if(myObj[key] === 1) sum += Number(key)
    })
    return sum
}
// console.log(sumOfUniqueNum([1,2,3,2]))

function commonKeys(obj1, obj2){
    let common = []

    Object.keys(obj1).forEach(k1 => {
        Object.keys(obj2).forEach(k2 => {
            if(k1 === k2) common.push(k1)
        })
    })
    return common
}
// console.log(commonKeys({name: 'Brad', age: 25}, {name: 'Titan', place: 'mars'}))

function toObj(queryStr){
    let newArr = queryStr.replace('?','').split('&')
    let myObj = {}

    newArr.forEach(item =>{
        let myItem = item.split('=')
        myObj[myItem[0]] = myItem[1]
    })
    return myObj
}
// console.log(toObj('?name=John&age=20&active=true'))

function replaceNum(str){
    let numbers = ['0','1','2','3','4','5','6','7','8','9']
    for(let num of numbers){
        if(str.includes(num)) {
            str = str.replace(num, '#')
        }  
    }
    return str
}
// console.log(replaceNum('Room 45 on floor 3'))

function mergeDuplicateIDs(arr){
    let myObj = {}
    let newArr = []
    
    arr.forEach(obj =>{
        if(!myObj[obj.id]) myObj[obj.id] = obj.value
        else myObj[obj.id] = myObj[obj.id] + obj.value
    })
    
    Object.keys(myObj).forEach(key =>{
        newArr.push({id: Number(key), value: myObj[key]})
    })
    return newArr
}
// mergeDuplicateIDs([{id: 1, value: 10}, {id:2, value: 20},{id:1, value: 15}])

