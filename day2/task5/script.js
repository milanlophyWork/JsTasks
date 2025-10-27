function frequency(str){
    let freq = {}
    for(char of str){
        freq[char] = (freq[char] || 0) + 1
    }
    return freq
}

console.log(frequency('programming'))
console.log(frequency('hello'))