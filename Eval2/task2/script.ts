export function groupAnagrams(words: string[]){
    if(!Array.isArray(words) || words.length === 0) return 'invalid input'

    let newArr: {[key:string]: string[]}[] = []
    let result: string[][] = []
    
    for(let word of words){
        if(typeof word !== 'string' || !word.trim()) return 'invalid input'

        let sorted = word.split('').sort()
        if(!newArr[sorted]){
            newArr[sorted] = []
        }
        newArr[sorted].push(word)
    }
    Object.values(newArr).forEach(arr => {
        result.push(arr)
    })
    return result
}
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
