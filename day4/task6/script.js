const texts = [
    {
        0: 'Zero',
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
        100: 'Hundred',
        1000: 'Thousand'
    }
]
function number(n){    
    if(n in texts[0]) {
        console.log(texts[0][n])
    }else{
        let text 
        if(n<100){
            const quotient = Math.floor(n/10)*10
            text= texts[0][quotient] + ' ' + texts[0][n%10]
            console.log(text)
        }else if(n<1000){
            const quotient = Math.floor(n/100)
            text = texts[0][quotient] + ' hundred and '
            n= n%100
            console.log(text)
            number(n)

        }
    }
}
number(723)