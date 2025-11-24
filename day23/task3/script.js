function AddSeparator(num) {
    var numStr = String(num);
    if (numStr.length <= 3)
        return num;
    var div = '1';
    var result = '';
    var temp = '';
    // function addComa(num){
    div = div.padEnd(numStr.length - 1, '0');
    result = String(num / Number(div)).replace('.', ',');
    temp = result.split(',');
    // console.log(temp)
    // final =  result + temp[0]
    AddSeparator(Number(temp[1]));
    // return result
    // }
    // addComa(num)
    console.log(temp, result);
    // return final
}
AddSeparator(123456789);
