// Task4: function formatId(str or num) that returns a string with prefix 'ID-
function formatId(id:string|Number):string{    // type id = string|Number => Ts union types [OR]
    return `ID-${id}`
}
console.log(formatId(123))
console.log(formatId('A7B'))