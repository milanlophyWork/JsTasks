// 1) Prime number
function isPrime(num) {
    var prime;
    if (num === 2) {
        return 'True';
    }
    else if (num > 2) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'False';
            }
        }
        prime = num;
    }
    else {
        return 'False';
    }
    if (prime)
        return 'True';
}
console.log(isPrime(7));
console.log(isPrime(10));
// console.log(isPrime(29))
// 2) Return word count
function wordCount(str) {
    var count = 0;
    var words = str.split(' ');
    words.forEach(function () {
        count++;
    });
    return count;
}
// console.log(wordCount('Hello world'))
// console.log(wordCount('This is a sample sentence.'))
// console.log(wordCount('Programming is fun!'))
// 3) Determine anagram
function anagrams(str1, str2) {
    var sort1 = str1.split('').sort().toString().toLowerCase();
    var sort2 = str2.split('').sort().toString().toLowerCase();
    if (sort1 === sort2) {
        return 'True';
    }
    else {
        return 'False';
    }
}
// console.log(anagrams('listen', 'silent'))
// console.log(anagrams('restful', 'fluster'))
// console.log(anagrams('hello', 'world'))
// 4) return frequency of each character of a string
function frequency(str) {
    var newObj = {}; // To make type script accept bracket notation instead of 'newObj:object' use newObj: {[key:string]: number} and specify key is string and value is a number
    var count = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] in newObj) {
            var newCount = count;
            newCount++;
            newObj[str[i]] = newCount;
        }
        else {
            newObj[str[i]] = count;
        }
    }
    return newObj;
}
// console.log(frequency('hello'))
// console.log(frequency('programming'))
