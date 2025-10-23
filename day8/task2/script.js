// Task 2: Greeting function
function greet(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name);
}
console.log(greet('Bob', 'Hi'));
console.log(greet('Alice'));
