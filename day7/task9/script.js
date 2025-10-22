const addBtn = document.querySelector('.add')
const ulBar = document.querySelector('.list-bar')
const newItem = document.querySelector('.text')

addBtn.addEventListener('click',()=>{
    const newLi = document.createElement('li')
    newLi.innerText = newItem.value
    newItem.value = ''
    ulBar.appendChild(newLi)
    document.body.appendChild(ulBar)
})
