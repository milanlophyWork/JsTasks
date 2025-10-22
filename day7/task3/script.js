
const box= document.createElement('div')
box.classList.add('myBox')
document.body.appendChild(box)

box.addEventListener('dblclick',()=>{
    const r=Math.floor(Math.random()*254)+1
    const g=Math.floor(Math.random()*254)+1
    const b=Math.floor(Math.random()*254)+1

    box.style.borderColor = `rgb(${r},${g},${b})`

})
