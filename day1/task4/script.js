// TODO

const Todo = document.getElementById('todo')
const ul = document.querySelector('.todo-list')

document.getElementById('add-todo').addEventListener('click', addTodo)

function addTodo(){
    let todoItem = {
        todo : Todo.value
    }

    localStorage.setItem('todo', JSON.stringify(todoItem))
    displayTodo()
    Todo.value = ''
    
}
function displayTodo(){
    const li = document.createElement('li')
    li.innerHTML = localStorage.getItem('todo') || ''
    li.classList.add('pending')
    ul.appendChild(li)

    todoDone(li)
}
displayTodo()

function todoDone(li){
    li.addEventListener('click', ()=> {
        li.classList.add('todo-done')
        li.classList.remove('pending')
        localStorage.removeItem('todo')
    }) 
}
