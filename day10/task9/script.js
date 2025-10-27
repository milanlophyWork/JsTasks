/*
function isValidEmail(email){
    let arr = email.split('.') // split email based on .
    let lastElement = arr[arr.length-1]
    let flag = 0
   
    arr.forEach(item=> {
        if(item.includes('@')) { // checking if splitted arr has item with @
            arr = item // storing last item with @ 
        }
    })

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === '@'){
            arr = arr.split('@')
            if(arr[arr.length-1].length >= 2){// checking the last item with @ has atleast 2 letters
                flag = 1 
            }else return console.log('Invalid email')
        }
    }

    if(lastElement === 'com' || lastElement === 'in' || lastElement === 'org'){ 
    
        if(email.includes('@')){
            arr = email.split('@')

            if(arr[0].length >= 2){ // checking if first part has length >= 2
                flag = 1
                // console.log('Valid email:',email)
            }else flag = 0
        }else flag = 0
    }else flag = 0
            
    
    if(flag === 0) console.log('Invalid Email')
        else console.log('Valid email: ',email)
}*/

function isValidEmail(email){
    const input = document.createElement('input')
    input.type = 'email'
    input.value = email
    console.log(input.checkValidity())
}
isValidEmail('milan.lophy@vonnue.com')
isValidEmail('milan.lophyvonnue.com')
isValidEmail('@vonnue.in')