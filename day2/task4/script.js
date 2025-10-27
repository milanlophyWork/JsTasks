function anagram(str1, str2){
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()

    if(str1.length !== str2.length) return false
    
    let sort1 = str1.split('').sort().join('')
    let sort2 = str2.split('').sort().join('')
    
    return sort1===sort2
}

console.log(anagram('silent', 'listen'),anagram('restful', 'fluster'))


