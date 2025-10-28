function anagram(str1, str2){
    const sort1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('')
    const sort2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('')

    if(sort1.length !== str2.length){
        console.log('False')
        return
    }

    if(sort1===sort2){
        console.log('True')
    }else{
        console.log('False')
    }
}
anagram('liten','silent')
anagram('restful','fluster')
anagram('hello','world')