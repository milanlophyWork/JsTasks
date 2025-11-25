export function vowelCount(str: string){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'

    let vowels: string[] = ['a','e','i','o','u', 'A','E','I','O','U']
    let count:number = 0
    for(let char of str){
        if(vowels.includes(char)) count++
    }
    return count
}
console.log(vowelCount('Hello All, welcOmE!'))