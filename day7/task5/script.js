const box= document.createElement('div')
box.classList.add('myBox')
document.body.appendChild(box)

function changeBorderColor(){
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)

    box.style.borderColor = `rgb(${r},${g},${b})`
    box.removeEventListener('dblclick',changeBorderColor)
}

box.addEventListener('dblclick',changeBorderColor)
