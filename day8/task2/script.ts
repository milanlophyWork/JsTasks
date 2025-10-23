// Task 2: Greeting function
function greet(name:string, greeting:string='Hello'): string // Setting Hello as default value of greeting
{
    return `${greeting}, ${name}`
}
console.log(greet('Bob', 'Hi'))
console.log(greet('Alice'))