//task3
function objInvert(obj){
    let newObj = {}
    const newValues = Object.keys(obj)
    const newKeys = Object.values(obj)
    for(let i= 0; i<newKeys.length;i++){
        newObj[newKeys[i]] = newValues[i]
    }
    console.log(newObj)
}
// objInvert({a:1,b:2})

//task4
function pattern(str){
    let first = ''
    for(let i=0;i<str.length;i++){
        first += str[i]
        console.log(first)
    }
    let second = ''
    for(let i=str.length-1;i>0;i--){
        second = str[i] + second
        console.log(second)
    }
}
// pattern('cat')

// task5
function toKebabCase(str){
    let kebab = ''
    for(char of str){
        kebab += char.replace(/[A-Z]/, `-${char.toLowerCase()}`)
    }
    console.log(kebab)
}
// toKebabCase('myFunction')

//task6
const texts = [
    {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Fourty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety',
        100: 'Hundred'
    }
]

function number(n){
    let str = String(n)
    let num
    for(char of str){
        num = Number(char)
        // if(texts.includes(num)){
        //     console.log(texts[0][num])
        // }
        // console.log(texts[0][num])

    }
    if(n<20 || n%10 ===0) {
        console.log(texts[0][n])
    }
    else if(str.length === 2 && n>20 && n%10 !== 0){
        const div = greaterThanTwenty(n)
        const quotient = Math.floor(n/div)*div
        const text = texts[0][quotient]+ ' ' + texts[0][n%10]
        console.log(text)
    }
    else if(str.length === 3){
        const quotient = Math.floor(n/100)
        const text = texts[0][quotient] + ' hundred and '
        console.log(text)
    }
    // if(str.length > 1) console.log(texts[0][num])
}
/*function greaterThanTwenty(n){
    let div = '1'
    for(let i=0; i<n.length-1;i++){
        div+='0'
        div = Number(div)
        console.log(div)
    }
    return div
}
greaterThanTwenty('723',3)*/
number(723)

//task8
function maxProduct(arr){
    const sorted = arr.sort((a,b) => b-a)
    const largest = sorted.slice(0,3)
    let sum = 1
    for(digit of largest){
        sum*=digit
    }
    console.log(largest,sum)
}
// maxProduct([1,2,3,4])
// maxProduct([-1,-2,-3,-4,-5])
// maxProduct([-4,-3,-2,-1,0])

//task9
function anagram(str1, str2){
    const sort1 = str1.split('').sort().toString().replaceAll(',','')
    const sort2 = str2.split('').sort().toString().replaceAll(',','')

    if(sort1===sort2){
        console.log('True')
    }else{
        console.log('False')
    }
}
// anagram('listen','silent')
// anagram('restful','fluster')
// anagram('hello','world')

//task10
function validEmail(email){
    const pattern = /[a-zA-Z0-9._-]+@+[a-zA-Z]+\.+com/g
    console.log(pattern.test(email))
}
// validEmail('test@gmail.com')
// validEmail('invalid.email.com')
// validEmail('user@domain')