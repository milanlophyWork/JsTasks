// COUNTER

const counter = document.querySelector('.count')

let val=0 
counter.textContent = val
counter.style.color = 'grey'

function changeColor(){
    if(val > 0){
        counter.style.color = 'green'
    }else if(val < 0){
        counter.style.color = 'red'
    }else{
        counter.style.color = 'grey'
    }
}
document.getElementById('increase').addEventListener('click', ()=> {
    if(val < 10){
        val = val + 1
        counter.textContent = val
        changeColor()
    }
})

document.getElementById('decrease').addEventListener('click', ()=> {
    if(val > -10){
        val = val - 1
        counter.textContent = val
        changeColor()
    }
})
document.getElementById('reset').addEventListener('click', ()=> {
    val = 0
    counter.textContent = val
    changeColor()
})