// Password strength checker
function passwordCheck(str){
    if(str.length < 6){
        console.log('weak')
    }else if(str.length <8 && (/\w+[0-9_@#$*-]/g).test(str)){
        console.log('medium')
    }else if(str.length >=8 && (/[A-Z]/g).test(str) && (/[a-z]/g).test(str) && (/[0-9]/g).test(str) && (/[_@#$-]+/g).test(str)){
        console.log('strong')
    }else{
        console.log('include upperCase, lowerCase, digits and special characters')
    }
}
passwordCheck('Mila_1234')