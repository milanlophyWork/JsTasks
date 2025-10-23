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

/*
function anagrams(arr:string[]){
    let sort1:string[] = []
   
    let first = arr[0].length
    for(let i=0; i<arr.length; i++){
        if(arr[i].length!==first){
            first = arr[i].length
        }else{
            sort1.push(arr[i].split('').sort().join().toString())
        }

    }

    console.log(sort1)

}

anagrams(['care','race','acre','dog','god','cat'])*/

