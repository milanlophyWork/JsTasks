const textBar = document.querySelector('.textBar')
const heartImg = document.querySelector('.heart')
const heartRed = document.querySelector('.heart-red')

heartImg.addEventListener('click',()=>{
    heartImg.classList.add('hide')
    heartRed.classList.add('show')

})
heartRed.addEventListener('click',()=>{
    heartImg.classList.remove('hide')
    heartRed.classList.remove('show')
})