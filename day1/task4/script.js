// TODO

const Todo = document.getElementById('todo')
const ul = document.querySelector('.todo-list')

document.getElementById('add-todo').addEventListener('click', addTodo)

function addTodo(){
    const li = document.createElement('li')
    li.innerHTML = Todo.value
    li.classList.add('pending')
    ul.appendChild(li)
    Todo.value = ''

    todoDone(li)
}

function todoDone(li){
    li.addEventListener('click', ()=> {
        li.classList.add('todo-done')
        li.classList.remove('pending')
    })

    
}
