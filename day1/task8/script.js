function anagrams(words){
    let groups = {}
    words.forEach(word => {
        let sorted = word.split('').sort().join('')
        if(!groups[sorted]){ // checks if sorted word let 'acer' present in obj groups as a key if not set acer: []
            groups[sorted] = []
        }
        groups[sorted].push(word) // then push original word to corresponding key: acer: ['care','race','acre'] 
    })
    let result = Object.values(groups) // return values of the obj 'groups' as an array. Object.values is a js built in method that takes an obj as input and returns an array with values of obj(not keys)
    return result
}
console.log(anagrams((['care','race','acre','dog','god','cat'])))