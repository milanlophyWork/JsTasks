function removeDuplicates(arr){
    let obj = {}
    let newArr = []
    arr.forEach(item => {
        if(!obj[item]){
            obj[item] = 0
        }
        obj[item]++
    });
    Object.keys(obj).forEach(key => {
        newArr.push(Number(key))
    })
    return newArr
}
// console.log(removeDuplicates([1,2,4,2,3]))

function frequentItem(arr){
    let obj = {}
    arr.forEach(item => {
        if(!obj[item]) obj[item] = 0
        obj[item]++
    })

    let freq = Math.max(...Object.values(obj))
    for(let key of Object.keys(obj)){
        if(obj[key] === freq) return key
    }
}
// console.log(frequentItem([1,0,3,0,2,2,5,0]))

function findArmstrong(num){
    let numStr = String(num)
    let count = numStr.length

    let sum = 0
    for(let n of numStr){
        sum += n**count
    }    

    if(Number(sum) === num) return true
        else return false
}
// console.log(findArmstrong(153))

function toCamelCase(str){
    let newArr = []
    for(let item of str.split('_')){
        newArr.push(item.replaceAll(item[0], item[0].toUpperCase()))        
    }
    let first = newArr.join('')[0].toLowerCase()
    return first + newArr.join('').slice(1)
}
// console.log(toCamelCase('hello_world_from_js'))

function intersection(arr1, arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    return [...set1.intersection(set2)]
}

// console.log(intersection([1,2,3], [2,3,4]))

function removeFalsy(arr){
    let newArr = []
    arr.forEach(item => {
        if(item) newArr.push(item)
    })
    console.log(newArr)
}
// removeFalsy([1,0,'',2,null,3,false, 'hi', undefined, true, 4, NaN, 4])

function vowelCount(str){
    let vowels = ['a','e','i','o','u', 'A','E','I','O','U']
    let count = 0
    for(let char of str){
        if(vowels.includes(char)) count++
    }
    return count
}
// console.log(vowelCount('Hello All, welcOmE!'))

function toQueryStr(obj){
    let keys = Object.keys(obj)

    let newStr = ''
    keys.forEach(key =>{
        newStr += `${key}=${obj[key]}&`
    })
    return newStr.slice(0,-1)
}
// console.log(toQueryStr({name:'John', age: 30}))

function checkSort(arr){
    let ascend = [...arr].sort()
    let descend = [...ascend].reverse()
    let flag
    
    for(let i=0 ;i<arr.length; i++){
        if(arr[i] !== ascend[i]){ 
            if(arr[i] !== descend[i]) return 'unsorted'
                else flag = 1
        }else flag = 0
    }
    if(flag === 0) return 'ascending'
    else return 'descending'
}

// console.log(checkSort([4,3,2,1]))

function deepEqual(a,b){
    if(a===b) return true
    if(typeof a !== typeof b || a === null || b === null) return false
    if(a === null && b === null) return true

    if(Array.isArray(a)){
        if(!Array.isArray(b)) return false

        if(a.length !== b.length) return false

        for(let i=0 ; i<a.length; i++){
            if(deepEqual(a[i], b[i]) === false) return false
        }
        return true
    }

    let keysA = Object.keys(a)
    let keysB = Object.keys(b)

    if(keysA.length !== keysB.length) return false
    for(let key of keysA){
        console.log(key)
        if(!b.hasOwnProperty(key)) return false
        if(typeof a[key] !== 'object'){
            if(deepEqual(a[key], b[key]) === false) return false
        }else if(typeof a[key] === 'object'){
            if(Array.isArray(a[key]) || a[key] === null){
                if(deepEqual(a[key], b[key])=== false) return false
            }else {
                if(deepEqual(a[key], b[key]) === false) return false
            }
        }

        return true
    }

    return false
}
console.log(deepEqual({a: 1, b:{c:2}}, {a:1, b:{c:3}}))
console.log(deepEqual({b: [1]}, {b:[2]}))