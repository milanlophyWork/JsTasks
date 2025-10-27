function validEmail(email){
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zZ0-9.-]+\.[a-z]{2,}$/g
    return pattern.test(email)
}
console.log(validEmail('test@example.com'))
console.log(validEmail('invalid.email.com'))
console.log(validEmail('user@domain'))