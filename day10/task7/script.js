let text = {
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
function numberToText(num){
    if(text[num]) return text[num]
    else{
        let numTxt = ''
        if(num < 100){
            const quotient = Math.floor(num/10)*10
            numTxt = `${text[quotient]} ${text[num%10]}` + numTxt
            console.log(numTxt)
        }
        else if(num < 1000){
            const quotient = Math.floor(num/100)
            numTxt = `${text[quotient]} hundred and ` + numTxt
            num = num%100 
            console.log(numTxt)
            numberToText(num)
        }
    }
}
numberToText(432)