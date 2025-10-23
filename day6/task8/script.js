const readline = require('readline') // import node.js's buil-in readline module which helps to take take input from the user in terminal

const rl= readline.createInterface({ // creating an interface for input/output
    input: process.stdin,// read input from the keyboard
    output: process.stdout// print output to the console
})

let employees = []
function showMenu(){
    console.log(`
            ==== Employee Manageer ====
            1. Add Employee
            2. List Employees
            3. Delete Employee
            4.Exit
        `)
        rl.question('Choose an option(1-4):',handleMenu) // asks user for their choice. When user types something it runs the function handleMenu
}

function handleMenu(choice){
    switch(choice.trim()){ // choice.trim removes extra spaces [ ' 1 ' to '1' ]
        case '1':
            addEmployee()
            break
        case '2':
            listEmployees()
            break
        case '3':
            deleteEmployee()
            break
        case '4':
            console.log('Goodbye!')
            rl.close() // close the program
            break
        default:
            console.log('Invalid choice. Try again.')
    }
}

function addEmployee(){
    rl.question('Enter name:',name=> {
        rl.question('Enter age:', age=>{
            rl.question('Enter role:', role=>{ // asks 3 questions: when all answers are given it creates an object with name, age, role and add it to employees array 
                employees.push({name,age,role})
                console.log(`Added ${name} successfully!`)
                showMenu()
            })
        })
    })
}

function listEmployees(){
    if(employees.length === 0){
        console.log('Employees not found')
    }else{
        console.log('\n--- Employees List ---')
        employees.forEach((emp,i)=>{
            console.log(`${i+1}.${emp.name}|Age: ${emp.age}| Role: ${emp.role}`)
        })
    }
    showMenu()
}

function deleteEmployee(){
    rl.question('Enter employee name to be deleted:',name=>{
        const index = employees.findIndex(e=> e.name.toLowerCase() === name.toLowerCase())
        if(index !== -1){
            employees.splice(index, 1)
            console.log(`Deleted ${name} successfully`)
        }else{
            console.log('Employee not found')
        }
        showMenu()
    })
}

showMenu() // to display at starting 