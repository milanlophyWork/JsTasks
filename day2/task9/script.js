function validEmail(email){
    const pattern = /[a-zA-Z0-9]+@+[a-z]+\.+com/g
    const result = pattern.test(email)
    return result
}
console.log(validEmail('test@example.com'))
console.log(validEmail('invalid.email.com'))
console.log(validEmail('user@domain'))