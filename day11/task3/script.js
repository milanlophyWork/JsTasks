const person = {
    firstName : 'John',
    lastName : 'Doe',
    birthYear : 1990,
    getFullName (){
        return `${this.firstName} ${this.lastName}`
    },
    getAge(){
        const currentYear = new Date().getFullYear()
        return `${currentYear - this.birthYear}`
    }
}
console.log(person.getFullName(), person.getAge())