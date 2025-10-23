// 1) Prime number
function isPrime(num:number){
    let prime
    if(num === 2){
        return 'True'
    }else if(num>2){
        for(let i= 2;i< num;i++){
            if(num%i === 0){
                return 'False'
            }
        }
        prime = num
    }else{
        return 'False'
    }
    if(prime) return 'True'
}
console.log(isPrime(7))
// console.log(isPrime(10))
// console.log(isPrime(29))

// 2) Return word count

function wordCount(str:string):number{
    let count = 0
    const words = str.split(' ')
    words.forEach(()=>{
        count++
    })
    return count
}
console.log(wordCount('Hello world'))
// console.log(wordCount('This is a sample sentence.'))
// console.log(wordCount('Programming is fun!'))

// 3) Determine anagram

function anagrams(str1:string, str2:string){
    const sort1 = str1.split('').sort().toString().toLowerCase()
    const sort2 = str2.split('').sort().toString().toLowerCase()

    if(sort1===sort2){
        return 'True'
    }else{
        return 'False'
    }
}
console.log(anagrams('listen', 'silent'))
// console.log(anagrams('restful', 'fluster'))
// console.log(anagrams('hello', 'world'))

// 4) return frequency of each character of a string

function frequency(str: string){
    let newObj:{ [key: string] :number} = {} // To make type script accept bracket notation instead of 'newObj:object' use newObj: {[key:string]: number} and specify key is string and value is a number
    let count = 1
    for(let i=0;i<str.length; i++){

        if(str[i] in newObj){
            let newCount = count
            newCount++
            newObj[str[i]] = newCount
        }else{
            newObj[str[i]] = count
        }
    }
    return newObj
}
console.log(frequency('hello'))
// console.log(frequency('programming'))