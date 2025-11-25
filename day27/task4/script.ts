export function toCamelCase(str:string){
    if(typeof str !== 'string' || !str.trim() || str[0] === '_' || str[-1] === '_') return 'invalid input'

    let symbols = ['__', ' ', '#', '^', '(', ')', '*', '<', '>', '{', '}', ';', '-']
    for(let s of symbols){
        if(str.includes(s)) return 'invalid input'
    }
    
    let newArr: string[] = []
    for(let item of str.split('_')){
        newArr.push(item.replaceAll(item[0], item[0].toUpperCase()))        
    }
    let first:string = newArr.join('')[0].toLowerCase()
    return first + newArr.join('').slice(1)
}
console.log(toCamelCase('hello_world_from_js'))