// 7) task i => Student's mark status
const students = [
    {name: 'Alice', marks: 42},
    {name: 'Bob', marks: 67},
    {name: 'Charlie', marks: 35}
]

interface myObj{
    name: string, 
    marks:number,
}
interface newObj{
    name: string,
    status: string
}

function addStatus(arr:myObj[]):newObj[]{ // instead of object[] we used myObj[]. to specify that object has a string [name] and a number [marks]
    let newArr:newObj[]= []

    arr.forEach(item=> {
        if(item.marks>45){
            newArr.push({name: item.name, status: 'Pass'})
        }else{
            newArr.push({name: item.name, status: 'Fail'})
        }
    })
    return newArr
}
console.log(addStatus(students))

//task i => Todo list with localStorage

// task i => Anagrams from array
function anagrams(arr:string[]){
    let groups:{[key:string]:string[]} = {}

    arr.forEach(item=> {
        let sorted = item.split('').sort().join('')

        if(!groups[sorted]){
            groups[sorted] = []
        }
        groups[sorted].push(item)
    })
    let result = Object.values(groups)
    console.log(result)
}

anagrams(['care','race','acre','dog','god','cat'])
