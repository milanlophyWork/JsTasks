
function frequency(str){
    let count = 1
    let freq = {}
    for(let i=0; i<str.length; i++){

        if(str[i] in freq){
            let newCount = count
            newCount++
            freq[str[i]] = newCount
        }else{
            freq[str[i]] = count
        }
        // console.log(str[i])
        
    }
    return freq
}

console.log(frequency('programming'))
console.log(frequency('hello'))