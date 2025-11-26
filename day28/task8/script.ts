export function replaceNum(str: string){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'

    let numbers: string[] = ['0','1','2','3','4','5','6','7','8','9']
    for(let num of numbers){
        if(str.includes(num)) {
            str = str.replaceAll(num, '#')
        }  
    }
    return str
}
console.log(replaceNum('Room 45 on floor 3'))