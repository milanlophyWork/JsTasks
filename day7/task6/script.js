const height = document.querySelector('#height')
const width = document.querySelector('#width')

height.textContent = window.innerHeight
width.textContent =  window.innerWidth

window.addEventListener('resize', ()=>{
    width.textContent = window.innerWidth
    height.textContent = window.innerHeight
})