const textEntered = document.querySelector('#text')
const addBtn = document.querySelector('.add')
const showText = document.querySelector('.display-text')

addBtn.addEventListener('click',()=>{
    showText.innerText = textEntered.value
    textEntered.value = ''
})


document.querySelector('.toggle').addEventListener('click',()=>{
   if(showText.innerText){
        showText.classList.add('hide-text')
   }else{
        showText.classList.remove('hide-text')
   }
})