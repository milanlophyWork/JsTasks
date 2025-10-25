// TODO

const Todo = document.getElementById('todo')
const ul = document.querySelector('.todo-list')
const addBtn = document.getElementById('add-todo')
const pendingBtn = document.getElementById('pending-task')

addBtn.addEventListener('click', addTodo)
pendingBtn.addEventListener('click', showPending)

function addTodo(){
    let todoText = Todo.value.trim()
    if(!todoText) return // ignore empty input

    // get existing todos or empty array
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.push({text: todoText, done: false}) // Add new todo

    localStorage.setItem('todos', JSON.stringify(todos))// save updated todos

    // update UI
    displayTodo()
    Todo.value = ''
}
function displayTodo(filteredTodos = null){
    ul.innerHTML = '' // clear before re-render

    let todos = filteredTodos || JSON.parse(localStorage.getItem('todos')) || []

    todos.forEach((todo, index)=> {
        const li = document.createElement('li')
        li.textContent = todo.text

        //mark as done when clicked
        li.addEventListener('click', ()=> toggleDone(index))
        li.classList.add(todo.done ? 'todo-done': 'pending')
        ul.appendChild(li)
    })
}

function toggleDone(index){
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    todos[index].done = !todos[index].done // toggle
    localStorage.setItem('todos', JSON.stringify(todos))
    displayTodo()//refresh UI
}

function showPending(){
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    let pendingTodos = todos.filter(todo => !todo.done)
    displayTodo(pendingTodos) 
}
// show existing todos on page load
displayTodo()