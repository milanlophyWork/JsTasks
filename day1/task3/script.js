// MARK STATUS

const students = [
    {name: 'Alice', marks: 42},
    {name: 'Bob', marks: 67},
    {name: 'Charlie',marks: 35}
]

let markStatus = structuredClone(students)

markStatus.forEach(student =>{
    
    if(student.marks > 45){
        student['status'] = 'Pass'
    }else{
        student['status'] = 'Fail'
    }
    delete student['marks']
})


console.log('original: ',students, 'duplicate:', markStatus)
