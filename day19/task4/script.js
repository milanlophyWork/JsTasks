var data = [
    { name: 'Charlie', age: 25, joinDate: '2022-06-01' },
    { name: 'alice', age: 30, joinDate: '2020-03-15' },
    { name: 'Bob', age: 30, joinDate: '2021-05-10' },
    { name: 'bob', age: 30, joinDate: '2019-01-12' }
];
var sortKeys = [
    { key: 'age', order: 'desc' },
    { key: 'joinDate', order: 'asc' },
    { key: 'name', order: 'asc' },
    { key: 'salary', order: 'asc' }
];
function multiFieldSorter(data, sortKeys) {
    for (var i = 0; i < data.length; i++) {
        var _loop_1 = function (j) {
            data.sort(function (a, b) {
                // if(typeof a[sortKeys[j]['key']] === 'string' || typeof b[sortKeys[j]['key']] === 'string') console.log(a[sortKeys[j]['key']])
                if (sortKeys[j]['order'] === 'desc') {
                    return b[sortKeys[j]['key']] - a[sortKeys[j]['key']];
                }
                else {
                    // console.log(sortKeys[j]['key'], sortKeys[j]['key'], sortKeys[j]['key']-sortKeys[j]['key'])
                    return a[sortKeys[j]['key']] - b[sortKeys[j]['key']];
                }
            });
        };
        for (var j = 0; j < sortKeys.length; j++) {
            _loop_1(j);
        }
    }
    console.log(data);
}
multiFieldSorter(data, sortKeys);
