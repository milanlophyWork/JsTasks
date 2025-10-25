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
}
longestCommonPrefix(['flower','flow','flight'])
longestCommonPrefix(['dog','racecar','car'])