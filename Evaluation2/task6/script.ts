export function strCompression(str:string, action:string){
    if(typeof str !== 'string' || !str.trim() || action !== 'encrypt' && action !== 'decrypt') return 'invalid input'
    let obj: {[key: string]: number} = {}
    let digits: string[] = ['0','1','2','3','4','5','6','7','8','9']

    let dig = []
    let chars = []
    let newStr = ''

    if(action === 'encrypt'){
        
        for(let char of str){

            if(!obj[char]){
                obj[char] = 0
            }
            obj[char]++
        }
        Object.keys(obj).forEach(key => {
            newStr += `${key}${obj[key]}`
        })
    }else if(action === 'decrypt'){
        if(chars.length !== dig.length) return 'invalid input'
        for(let i=0; i<str.length; i++){
            if(i%2 !== 0){
                if(!digits.includes(str[i])) return 'invalid input'
                else dig.push(Number(str[i]))
            }else chars.push(str[i])
        }
        
        for(let i=0; i<dig.length; i++){
            for(let j=0; j<dig[i]; j++){
                newStr += chars[i]
            }
        }
    }
    return newStr
}
console.log(strCompression('aaabbbbcc', 'encrypt'))
console.log(strCompression('a3b4c2', 'decrypt'))