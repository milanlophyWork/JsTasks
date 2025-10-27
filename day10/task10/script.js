/*
function longestCommonPrefix(arr){
    let sorted = arr.sort()
    let myObj = {}
    let result = ''
    sorted.forEach((item) => {

        for(let i=0; i<item.length; i++){
            if(!myObj[item[i]]){
                myObj[item[i]] = []
            }
            if(myObj[item[i]] !== item) myObj[item[i]].push(item)

            if(myObj[item[i]].length === sorted.length){
                result += item[i]
            }
        }
       
    })
    
    console.log(result)
} */

function longestCommonPrefix(strings){
    if(strings.length === 0) return ''

    let prefix = strings[0]
    for(let i=0; i< strings.length; i++){
        while(strings[i].indexOf(prefix) !== 0){ // checks if current string starts with prefix
            prefix = prefix.slice(0,-1) // removes last charecter on each iteration
            if(prefix === '') return ''
        }
    }
    return prefix
}
console.log(longestCommonPrefix(['flower','flow','flight']))
console.log(longestCommonPrefix(['dog','racecar','car']))