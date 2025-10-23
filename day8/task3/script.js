//Task 3: Print array of strings in uppercase
function printArray(arr) {
    var newArr = []; // declaring newArr as empty array of type array with strings as items
    arr.forEach(function (item) {
        newArr.push(item.toUpperCase());
    });
    console.log(newArr);
}
printArray(['hello', 'hi']);
