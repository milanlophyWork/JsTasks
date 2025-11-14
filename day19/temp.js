
/*const data= [
    {name: 'Charlie', age:25, joinDate: '2022-06-01'},
    {name: 'alice', age:30, joinDate:'2020-03-15'},
    {name: 'Bob', age: 30, joinDate: '2021-05-10'},
    {name: 'bob', age: 30, joinDate: '2019-01-12'}
]

const sortKeys = [
    {key: 'age', order: 'desc'},
    {key: 'joinDate', order: 'asc'},
    {key: 'name', order: 'asc'},
    {key: 'salary', order: 'asc'}
]*/

const data = [
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'David', department: 'HR', salary: 60000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Grace', department: 'Finance', salary: 85000 }
];

const sortKeys = [
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
];

function multiFieldSorter(data, sortKeys){
    for(let i=0; i<data.length; i++){
        for(let j=0; j<sortKeys.length; j++){
            data.sort((a,b)=> {

                if(sortKeys[j]['order'] === 'desc'){
                    return b[sortKeys[j]['key']]-a[sortKeys[j]['key']]
                }
        
                else {
                    // console.log(sortKeys[j]['key'], sortKeys[j]['key'], sortKeys[j]['key']-sortKeys[j]['key'])
                   
                    return a[sortKeys[j]['key']] - b[sortKeys[j]['key']]
                }
            })
            
        }
        // console.log(data)
    }

    console.log(data)  
}
multiFieldSorter(data, sortKeys)

// console.log(['2022-06-01','2020-03-15','2021-05-10','2019-01-12'].sort((a,b)=> a-b))
// console.log(['a','c','b','d'].sort())
// console.log(['a','c','b','d'].sort((a,b)=> {
//     console.log(a, b, a-b)
//     return b-a
// }))
