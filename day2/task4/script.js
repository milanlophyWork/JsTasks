
function anagram(str1, str2){
    
    if(str1.length === str2.length){
        for(let i=0; i< str1.length; i++){
            for(let j=0; j< str2.length; j++){
                if(str1[i] === str2[j]){
                    flag = 1
                }
            }
        }
        
    }else{
        return false
    }

    if(flag === 0) return false
    else return true

    
}

console.log(anagram('silent', 'listen'),anagram('restful', 'fluster'))


