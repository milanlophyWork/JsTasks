function newString(str){
    const pattern = str.toLowerCase().replaceAll(' ','').replaceAll(',','').replaceAll('!','')
    return pattern
}

function palindrome(str){
    let reverse = ''

    for(char of str){
        reverse = char + reverse
    }
    const newStr = newString(str)
    const newReverse = newString(reverse)

    if(newStr === newReverse){
        console.log('True')
    }else{
        console.log('False')
    }
}
palindrome('Racecar')
palindrome('Hello, world!')
palindrome('A man, a plan, a canal, Panama!')