
export function toObj(queryStr: string){
    if(typeof queryStr !== 'string' || !queryStr.trim() || !queryStr.includes('=') || queryStr.slice(-1) === '=') return 'invalid input'

    let newArr = queryStr.replace('?','').split('&')
    let myObj: {[key: string]: unknown} = {}

    for(let item of newArr){
        let myItem: string[] = item.split('=')
        if(myItem[0] === '') return 'invalid input'
        
        myObj[myItem[0]] = myItem[1]
    }
    return myObj
}
// console.log(toObj('?name=John&age=20&active=true'))