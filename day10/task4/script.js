function groupAnagrams(words){
    let groups ={}
    words.forEach(word=> {
        let text = word.split('').sort().join('')
        if(!groups[text]){
            groups[text] = []
            
        }
        groups[text].push(word)        
    })
    let result = Object.values(groups)
    return result.sort((a,b)=> b.length-a.length)
}
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']))