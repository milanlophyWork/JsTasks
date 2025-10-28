function validEmail(email){
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/g
    console.log(pattern.test(email))
}
validEmail('test@gmail.com')
validEmail('invalid.email.com')
validEmail('user@domain')