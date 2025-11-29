export function templateParser(str:string, obj: {[key: string]: unknown}){
    if(typeof str !== 'string' || !str.trim() || typeof obj !== 'object' || Array.isArray(obj) || obj === null) return 'invalid input'
    
    let arr = str.split(/\s+/)
    for(let i=0; i<arr.length; i++){
        if(arr[i].includes('{{') && arr[i].includes('}}')){
            let clearText = arr[i].replaceAll(/[{{,}}]/g,'')
            if(Object.keys(obj).includes(clearText)) arr.splice(i, 1, obj[clearText])
        
        }
    }
    return arr.join(' ')

}
// console.log(templateParser('Hello {{name}}, you have {{count}} new messages.',{ name: "John", count: 3 }))