// 7) task i => Student's mark status
var students = [
    { name: 'Alice', marks: 42 },
    { name: 'Bob', marks: 67 },
    { name: 'Charlie', marks: 35 }
];
function addStatus(arr) {
    var newArr = [];
    arr.forEach(function (item) {
        if (item.marks > 45) {
            newArr.push({ name: item.name, status: 'Pass' });
        }
        else {
            newArr.push({ name: item.name, status: 'Fail' });
        }
    });
    return newArr;
}
console.log(addStatus(students));
function anagrams(arr) {
    // let sameLength:string[] = []
    var sort1 = [];
    // let length = arr[0].length
    arr.forEach(function (item) {
        // sort1.push(item.split('').sort().join().toString())
        // console.log(sort1)
    });
    var first = arr[0].length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length !== first) {
            first = arr[i].length;
        }
        else {
            sort1.push(arr[i].split('').sort().join().toString());
        }
    }
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i].length === length){
    //         sameLength.push(arr[i])
    //     }
    // }
    console.log(sort1);
}
anagrams(['care', 'race', 'acre', 'dog', 'god', 'cat']);
