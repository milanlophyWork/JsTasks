function anagram(str1, str2){
    const sort1 = str1.split('').sort().toString().replaceAll(',','')
    const sort2 = str2.split('').sort().toString().replaceAll(',','')

    if(sort1===sort2){
        console.log('True')
    }else{
        console.log('False')
    }
}
anagram('listen','silent')
anagram('restful','fluster')
anagram('hello','world')