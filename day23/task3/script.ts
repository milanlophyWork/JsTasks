function AddSeparator(num: number){
    let numStr:string = String(num)
    if(numStr.length <= 3) return num

    let div:string = '1'
    let result = ''
    let temp:string| string[] = ''
    // function addComa(num){
        div = div.padEnd(numStr.length-1, '0')
        result = String(num/Number(div)).replace('.', ',')
        temp = result.split(',')
        // console.log(temp)
        // final =  result + temp[0]
        AddSeparator(Number(temp[1]))
        // return result
    // }
    // addComa(num)
    console.log(temp, result)
    // return final
}
AddSeparator(123456789)