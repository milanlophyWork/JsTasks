const box= document.createElement('div')
box.classList.add('myBox')
document.body.appendChild(box)
box.addEventListener('mouseover',()=> {
    let r= Math.floor(Math.random()*254)+1
    let g= Math.floor(Math.random()*254)+1
    let b= Math.floor(Math.random()*254)+1
    box.style.background = `rgb(${r},${g},${b})`
})
box.addEventListener('mouseout',()=>{
    box.style.background = 'black'
})