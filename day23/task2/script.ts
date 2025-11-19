export function buildObj(str: string){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'
    
    let myObj: {[key: string]: string} = {}
    for(let item of str.split('&')){
        if(!item.includes('=')) return 'invalid input'

        let objItem = item.split('=')
        myObj[objItem[0]] = objItem[1]
    }
    return myObj
}
// console.log(buildObj('name=John&age=20'))

